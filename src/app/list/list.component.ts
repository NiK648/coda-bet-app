import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

export interface User {
  "Name": string;
  "Price": string;
  "Bet": string;
  "Profile Image": string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(private data: DataService, private router: Router) {
  }

  ngOnInit() {
    this.data.fetchUserBets().subscribe((data: User[]) => {
      this.dataSource = new MatTableDataSource<User>(data);
      this.dataSource.paginator = this.paginator;
      this.selection = new SelectionModel<User>(true, []);
    }, err => {

    });
  }

  displayedColumns: string[] = ['select', 'name', 'level', 'avatar', 'bet', 'wins', 'lost', 'price'];
  dataSource = new MatTableDataSource<User>();
  selection = new SelectionModel<User>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  startBet() {
    this.router.navigateByUrl('bet', { state: { items: this.selection.selected } });
  }
}

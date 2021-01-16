import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../list/list.component';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.css']
})
export class BetComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(history.state);
    if (!history.state.items) {
      this.router.navigateByUrl('list');
    }
    this.winner = this.getRandom();
    this.data = history.state.items;
  }

  winner: number;

  data: User[] = [];

  getRandom() {
    return Math.floor(Math.random() * 9) + 1;
  }

  back() {
    this.router.navigateByUrl('list');
  }

}

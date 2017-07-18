import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {

  constructor(private router: Router) {
  }

  users = [
    { id: '1', firstname: "Sam", lastname: "Hurst", email: 'apple@aol.com' },
    { id: '2', firstname: "Tom", lastname: "Bacon", email: 'banana@hotmail.com' },
    { id: '3', firstname: "Cindy", lastname: "Loren", email: 'orange@gmail.com' }
  ];

  navigateToDetail(user) {
        this.router.navigate(["detail", { id: user.id }]);
  }

  ngOnInit() {
  }

}

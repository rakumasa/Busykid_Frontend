import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerdetail',
  templateUrl: './customerdetail.component.html',
  styleUrls: ['./customerdetail.component.css']
})
export class CustomerdetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToDetail(user) {
          this.router.navigate(["list"]);
  }

      navigateToList() {
          this.router.navigate(["list"])
  }

}

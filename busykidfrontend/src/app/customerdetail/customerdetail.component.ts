import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customerdetail',
  templateUrl: './customerdetail.component.html',
  styleUrls: ['./customerdetail.component.css']
})
export class CustomerdetailComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute) { }

  public detailId;

  ngOnInit() {

    let id=this.route.snapshot.params['id'];
    this.detailId = id;
  }

  navigateToRefund(detailId) {
        this.router.navigate(["refund", detailId]);
  }


  // navigateToRefund() {
  //         this.router.navigate(["refund", { id: }]);
  // }

  navigateToList() {
        this.router.navigate(["list"])
  }

}

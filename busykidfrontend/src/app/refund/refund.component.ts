import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-refund',
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.css']
})
export class RefundComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute) { }

  public refundId;

  ngOnInit() {
    let id=this.route.snapshot.params['id'];
    this.refundId = id;
  }

  navigateToList() {
        this.router.navigate(["list"])
  }
}

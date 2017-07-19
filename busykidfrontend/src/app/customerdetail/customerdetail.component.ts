import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-customerdetail',
  templateUrl: './customerdetail.component.html',
  styleUrls: ['./customerdetail.component.css']
})
export class CustomerdetailComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute) {
  }

  userForm = new FormGroup({
    RefundAmount: new FormControl()
    // CustomerId: new FormControl(),
    // date: new FormControl()
  });

  public detailId;

  ngOnInit() {
    let id=this.route.snapshot.params['id'];
    this.detailId = id;
  }


  onSubmit() {
    console.log(this.userForm.value)
  }

  navigateToRefund(detailId) {
        this.router.navigate(["refund", detailId]);
  }

  navigateToList() {
        this.router.navigate(["list"])
  }


}

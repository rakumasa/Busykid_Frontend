import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {

  constructor(private router: Router, private http: Http ) {}

  getAll(){
  this.http.get('http://localhost:55472/users').subscribe((res) => { const getallCustomer = res.json();
    console.log(getallCustomer);
  })
}
  users: {id:number, firstname:string, lastname:string, email:string};

  navigateToDetail(user) {
        this.router.navigate(["detail", { id: user.id }]);
  }


  ngOnInit() {
    this.http.get('http://localhost:55472/users').subscribe((res) => { const getallCustomer = res.json();
      this.users = getallCustomer;
    })
  }

}

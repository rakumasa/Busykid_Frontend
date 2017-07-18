import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpComponent implements OnInit {

  constructor(private http: Http) { }

  fetchData() {
    this.http.get('http://localhost:55472/users/').subscribe(
      (data) => console.log(data)
    )
  }

  ngOnInit() {
  }

}

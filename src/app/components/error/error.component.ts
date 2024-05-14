import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Data } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styles: [''],
})
export class ErrorComponent implements OnInit {
  routeParams: any;
  data: any;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeParams = this.activatedRoute.snapshot.queryParams;
    this.data = this.activatedRoute.snapshot.data;
  }
}

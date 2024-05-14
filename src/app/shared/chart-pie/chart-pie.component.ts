import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-pie',
  templateUrl: './chart-pie.component.html',
  styleUrls: ['./chart-pie.component.scss'],
})
export class ChartPieComponent {
  @Input() data!: any;
  @Input() options!: any;
}

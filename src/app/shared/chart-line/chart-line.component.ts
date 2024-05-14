import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chart-line',
  templateUrl: './chart-line.component.html',
  styleUrls: ['./chart-line.component.scss'],
})
export class ChartLineComponent {
  @Input() data!: any;
  @Input() options!: any;

  ngOnInit() {}
}

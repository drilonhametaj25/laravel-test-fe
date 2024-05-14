import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MaintenanceComponent {
  constructor(private router: Router) {}
}

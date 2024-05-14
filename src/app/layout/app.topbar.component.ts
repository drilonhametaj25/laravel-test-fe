import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from './service/app.layout.service';
import { AuthService } from '../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html',
})
export class AppTopBarComponent implements OnInit {
  items!: MenuItem[];
  isMaintenance: boolean = false;

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  constructor(
    public layoutService: LayoutService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.router.url.includes('maintenance')) {
      this.isMaintenance = true;
      this.layoutService.onMenuToggle();
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}

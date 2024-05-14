import { MediaMatcher } from '@angular/cdk/layout';
import {
  ChangeDetectorRef,
  Component,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from '@app/app/services/auth-service.service';
import { SidenavMenuItem } from '@app/app/services/sidenav-menu/sidenav-menu-item';
import { SidenavMenuService } from '@app/app/services/sidenav-menu/sidenav-menu.service';
import { SnackService } from '@app/app/services/snack.service';

@Component({
  selector: 'app-layout-wrapper',
  templateUrl: './layout-wrapper.component.html',
  styleUrls: ['./layout-wrapper.component.scss'],
})
export class LayoutWrapperComponent implements OnInit {
  @ViewChild('snav') sidenav?: MatSidenav;

  collapse = false;
  public items: Array<SidenavMenuItem> = [];
  windowWith: number = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowWith = event.target.innerWidth;
  }

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  user: any = null;
  formattedName = '';

  routes = [
    {
      path: 'dashboard',
      label: 'Dashboard',
      icon: 'dashboard',
    },
    {
      path: 'imprese',
      label: 'Imprese',
      icon: 'business',
    },
    {
      path: 'user',
      label: 'User',
      icon: 'group',
    },
  ];

  isCalendarModule: boolean = false;

  constructor(
    private authService: AuthService,
    private snackbarService: SnackService,
    private sidenavService: SidenavMenuService,
    private router: Router,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.items = this.sidenavService.items;
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    // this.authService.isLoggedIn().subscribe(
    //   () => {
    //     console.log('Authenticated');
    //     this.snackbarService.message('Authenticated');
    //     // this.state.go('app..dashboard');
    //   },
    //   () => {
    //     console.warn('Not authenticated, need to login');
    //     this.router.navigate(['login'])
    //   }
    // );

    this.router.events.subscribe(() => {
      if (this.sidenav) {
        this.sidenav.close();
      }

      if (this.router.url.includes('calendar')) {
        this.isCalendarModule = true;
      } else {
        this.isCalendarModule = false;
      }
    });
  }
  ngOnInit() {
    this.user = this.authService.getUserInfo();
    if (this.user.name && this.user.surname) {
      this.formattedName = this.user.name + ' ' + this.user.surname;
    } else {
      this.formattedName = this.user.email + ' ' + this.user.email;
    }
    // console.log('user', this.user);

    if (this.router.url.includes('calendar')) {
      this.isCalendarModule = true;
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}

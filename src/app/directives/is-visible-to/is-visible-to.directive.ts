import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Site } from '@app/app/constants';
import { UserInterface } from '@app/app/interfaces/user.interface';
import { AuthService } from '@app/app/services/auth-service.service';

@Directive({
  selector: '[isVisibleTo]',
})
export class IsVisibleToDirective implements OnInit {
  @Input() isVisibleTo?: string | Array<string>;
  @Input() moduleName?: string;
  @Input() site?: Site | null;
  nativeElement;

  constructor(el: ElementRef, public authService: AuthService) {
    this.nativeElement = el.nativeElement;
  }

  ngOnInit() {
    const currentUser = this.authService.getUserInfo() || {
      sites: [],
      enabledModules: [],
    };

    return true

  }
}

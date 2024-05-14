import { Injectable } from '@angular/core'
import { SidenavMenuModule } from './sidenav-menu.module'
import { SidenavMenuItem } from './sidenav-menu-item'
import { AuthService } from '../auth-service.service'

@Injectable({
  providedIn: SidenavMenuModule,
})
export class SidenavMenuService {
  public items: Array<SidenavMenuItem> = []

  constructor(private auth: AuthService) {}

  addItem(item: SidenavMenuItem) {
    this.items.push(item)
  }
}

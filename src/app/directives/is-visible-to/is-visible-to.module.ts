import { NgModule } from '@angular/core'
import { IsVisibleToDirective } from './is-visible-to.directive'

@NgModule({
  declarations: [IsVisibleToDirective],
  exports: [IsVisibleToDirective],
})
export class IsVisibleToModule {}

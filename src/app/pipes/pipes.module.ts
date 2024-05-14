import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrimPipe } from './trim.pipe';
import { FilterPipe } from './filter.pipe';
import { I18nTranslate } from './i18nTranslate.pipe';
import { FindItemPipe } from './find-item.pipe';



@NgModule({
  declarations: [TrimPipe, FilterPipe, I18nTranslate, FindItemPipe],
  imports: [
    CommonModule
  ],
  exports: [TrimPipe, FilterPipe, I18nTranslate, FindItemPipe]
})
export class PipesModule { }

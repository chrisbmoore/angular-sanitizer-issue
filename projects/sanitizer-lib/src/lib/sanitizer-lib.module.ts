import { NgModule } from '@angular/core';
import { SafeHtmlPipe } from './safe-html.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SafeHtmlPipe],
  imports: [
    CommonModule
  ],
  exports: [SafeHtmlPipe]
})
export class SanitizerLibModule { }

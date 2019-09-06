import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProgressButtonComponent} from './progress-button.component';

@NgModule({
  declarations: [ProgressButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [ProgressButtonComponent]
})
export class ProgressButtonModule {
}

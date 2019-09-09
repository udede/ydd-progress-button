import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProgressButtonComponent} from './progress-button.component';
import {ProgressButtonConfig, progressButtonServiceFactory} from './progress-button.types';
import {ProgressButtonService} from './progress-button.service';

@NgModule({
  declarations: [ProgressButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [ProgressButtonComponent],
  providers: [{
    provide: ProgressButtonService,
    useFactory: progressButtonServiceFactory(null)
  }]
})
export class ProgressButtonModule {
  static forRoot(config: ProgressButtonConfig): ModuleWithProviders {
    return {
      ngModule: ProgressButtonModule,
      providers: [{
        provide: ProgressButtonService,
        useFactory: progressButtonServiceFactory(config),
      }]
    };
  }
}

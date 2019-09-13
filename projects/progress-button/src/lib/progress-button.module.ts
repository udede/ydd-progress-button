import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProgressButtonComponent} from './progress-button.component';
import {
  FOR_ROOT_CONFIG_TOKEN,
  ProgressButtonConfig,
  progressButtonConfigFactory,
  ProgressButtonModuleConfig
} from './progress-button.types';
import {ProgressButtonService} from './progress-button.service';

export {ProgressButtonService};
export {ProgressButtonConfig};


@NgModule({
  declarations: [ProgressButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [ProgressButtonComponent]
})

export class ProgressButtonModule {

  static forRoot(config: ProgressButtonModuleConfig): ModuleWithProviders {
    return {
      ngModule: ProgressButtonModule,
      providers: [
        {
          provide: FOR_ROOT_CONFIG_TOKEN,
          useValue: config
        },
        {
          provide: ProgressButtonConfig,
          useFactory: progressButtonConfigFactory,
          deps: [FOR_ROOT_CONFIG_TOKEN]
        }]
    };
  }
}

import {TestBed} from '@angular/core/testing';

import {ProgressButtonService} from './progress-button.service';
import {ProgressButtonConfig, ProgressButtonData, ProgressButtonDesign, progressButtonServiceFactory} from './progress-button.types';

describe('ProgressButtonService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [{
      provide: ProgressButtonService,
      useFactory: progressButtonServiceFactory(null)
    }]
  }));

  it('should be created', () => {
    const service: ProgressButtonService = TestBed.get(ProgressButtonService);
    expect(service).toBeTruthy();
  });

  it('should update properties according to config', () => {
    const config: ProgressButtonConfig = {
      design: {background: '#F20', successBackground: '#000', linesSize: null},
      progress: {animation: 'shrink'}
    };
    const sDesign: ProgressButtonDesign = {
      background: '#F20',
      color: '#FFFFFF',
      successBackground: '#000',
      errorBackground: '#ff0c00',
      successIconColor: '#ffffff',
      errorIconColor: '#ffffff',
      progressBackground: '#000000',
      progressInnerBackground: '#555555',
      linesSize: 10
    };
    const sProgress: ProgressButtonData = {
      animation: 'shrink',
      direction: 'horizontal',
      statusTime: 1500,
    };
    const service: ProgressButtonService = new ProgressButtonService(config);
    expect(service.design).toEqual(sDesign, 'changes only single vars for config.design={...}');
    expect(service.progress).toEqual(sProgress, 'changes only single vars for config.progress={...}');
    // Test Null
    const config2: ProgressButtonConfig = {
      design: null,
      progress: null
    };
    const service2: ProgressButtonService = new ProgressButtonService(config2);
    expect(service2.design).toEqual({
      background: '#222222',
      color: '#FFFFFF',
      successBackground: '#00e175',
      errorBackground: '#ff0c00',
      successIconColor: '#ffffff',
      errorIconColor: '#ffffff',
      progressBackground: '#000000',
      progressInnerBackground: '#555555',
      linesSize: 10
    }, 'as default values for config.design = null');
    expect(service2.progress).toEqual({
      animation: 'fill',
      direction: 'horizontal',
      statusTime: 1500,
    }, 'as default values for config.progress = null');
    // Check direct change
    service.design = null;
    expect(service.design).toEqual(sDesign, 'as original config.design = null');
    service.progress = null;
    expect(service.progress).toEqual(sProgress, 'as original config.progress = null');
  });

});

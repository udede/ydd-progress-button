import {TestBed} from '@angular/core/testing';

import {ProgressButtonService} from './progress-button.service';
import {ProgressButtonConfig, ProgressButtonData, ProgressButtonDesign, progressButtonServiceFactory} from './progress-button.types';

describe('ProgressButtonService', () => {
  let defaultConfig: ProgressButtonConfig;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [{
      provide: ProgressButtonService,
      useFactory: progressButtonServiceFactory(null)
    }]
  }));
  beforeEach(() => {
    defaultConfig = {
      progress: {
        animation: 'fill',
        direction: 'horizontal',
        statusTime: 1500,
      },
      design: {
        background: '#222222',
        color: '#FFFFFF',
        successBackground: '#00e175',
        errorBackground: '#ff2948',
        successIconColor: '#ffffff',
        errorIconColor: '#ffffff',
        progressBackground: '#000000',
        progressInnerBackground: 'rgba(255, 255, 255,0.5)',
        linesSize: 10,
        radius: 0
      }
    };
  });


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
      errorBackground: '#ff2948',
      successIconColor: '#ffffff',
      errorIconColor: '#ffffff',
      progressBackground: '#000000',
      progressInnerBackground: 'rgba(255, 255, 255,0.5)',
      linesSize: 10,
      radius: 0
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
    expect(service2.design).toEqual(defaultConfig.design, 'as default values for config.design = null');
    expect(service2.progress).toEqual(defaultConfig.progress, 'as default values for config.progress = null');
    // Check direct change
    service.design = null;
    expect(service.design).toEqual(sDesign, 'as original config.design = null');
    service.progress = null;
    expect(service.progress).toEqual(sProgress, 'as original config.progress = null');
  });

  it('should change perspective according to progress animation', () => {
    const service: ProgressButtonService = new ProgressButtonService(null);
    service.progress.animation = 'rotate-angle-top';
    expect(service.status.perspective).toBe('', 'empty for animations that start with "rotate-"');
    service.progress.animation = 'flip-open';
    expect(service.status.perspective).toBe('', 'empty for animations that start with "flip-"');
    service.progress.animation = 'move-up';
    expect(service.status.perspective).toBe(null, 'null for others');
  });

  it('should change progress inner style according to progress animation', () => {
    const service: ProgressButtonService = new ProgressButtonService(null);
    let progressInner = service.styles(0, null).progressInner;
    expect(progressInner.background).toBe(defaultConfig.design.progressInnerBackground, 'rgba(255, 255, 255,0.5) for fill animation');
    expect(progressInner.borderColor).toBe(null, 'null for fill animation');
    expect(progressInner.borderLeftWidth).toBe(null, 'null for fill animation');
    expect(progressInner.borderRightWidth).toBe(null, 'null for fill animation');
    expect(progressInner.height).toBe(null, 'null for fill animation (horizontal)');
    expect(progressInner.width).toBe('0%', '0% for fill animation (horizontal)');
    service.progress.direction = 'vertical';
    progressInner = service.styles(0, null).progressInner;
    expect(progressInner.height).toBe('0%', '0% for fill animation (vertical)');
    expect(progressInner.width).toBe(null, 'null for fill animation (vertical)');
    service.progress = {animation: 'lateral-lines', direction: 'horizontal'};
    service.design = {linesSize: 22};
    progressInner = service.styles(0, null).progressInner;
    expect(progressInner.background).toBe(null, 'null for lateral-lines animation');
    expect(progressInner.borderColor).toBe(defaultConfig.design.progressInnerBackground,
      defaultConfig.design.progressInnerBackground + ' for lateral-lines animation');
    expect(progressInner.borderLeftWidth).toBe(service.design.linesSize + 'px', '22px for lateral-lines animation');
    expect(progressInner.borderRightWidth).toBe(service.design.linesSize + 'px', '22px for lateral-lines animation');
    expect(progressInner.height).toBe('0%', '0% for lateral-lines animation');
    expect(progressInner.width).toBe(null, 'null for lateral-lines animation');
    service.progress = {animation: 'top-line', direction: 'horizontal'};
    service.design.linesSize = 20;
    progressInner = service.styles(0, null).progressInner;
    expect(progressInner.height).toBe(service.design.linesSize + 'px', '20px for top-line animation (horizontal)');
    expect(progressInner.width).toBe('0%', '0% for top-line animation (horizontal)');
    service.progress = {animation: 'top-line', direction: 'vertical'};
    service.design.linesSize = null;
    progressInner = service.styles(0, null).progressInner;
    expect(progressInner.width).toBe(service.design.linesSize + 'px', '10px for top-line animation (vertical)');
    service.progress = {animation: 'shrink'};
    service.design.radius = 10;
    progressInner = service.styles(10, null).progressInner;
    expect(progressInner.width).toBe( '10%', '10% for shrink animation (width radius)');
  });

  it('should change contentStyle according to progress animation', () => {
    const service: ProgressButtonService = new ProgressButtonService(null);
    service.progress = {animation: 'slide-down'};
    let content = service.styles(0, null).content;
    expect(content.background).toEqual('#222222', '#222222 for slide-down');
    service.progress = {animation: 'move-up'};
    content = service.styles(0, null).content;
    expect(content.background).toEqual('#222222', '#222222 for move-up');
    service.progress = {animation: 'fill'};
    content = service.styles(0, null).content;
    expect(content.background).toEqual(null, 'null for others');
  });

  it('should change button background color according to the status', () => {
    const service: ProgressButtonService = new ProgressButtonService(null);
    service.design.successBackground = '#010101';
    let button = service.styles(0, 'state-success').button;
    expect(button.background).toBe(service.design.successBackground, service.design.successBackground + ' for state-success');
    service.design.errorBackground = '#F20';
    button = service.styles(0, 'state-error').button;
    expect(button.background).toBe(service.design.errorBackground, service.design.errorBackground + ' for state-error');
  });

  it('should change button style background according to the perspective', () => {
    const service: ProgressButtonService = new ProgressButtonService(null);
    service.progress = {animation: 'rotate-angle-top'};
    let button = service.styles(0, null).button;
    expect(button.background).toBe(null, ' null for perspective animation');
    service.progress = {animation: 'fill'};
    button = service.styles(0, null).button;
    expect(button.background).toBe('#222222', ' #222222 for no perspective animation');
  });

});

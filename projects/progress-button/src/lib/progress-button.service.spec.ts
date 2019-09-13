import {TestBed} from '@angular/core/testing';

import {ProgressButtonService} from './progress-button.service';
import {
  ProgressButtonConfig,
  ProgressButtonData,
  ProgressButtonDesign,
  progressButtonConfigFactory,
  FOR_ROOT_CONFIG_TOKEN, mergeOptions
} from './progress-button.types';

describe('ProgressButtonService', () => {
  let defaultConfig: ProgressButtonConfig;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: FOR_ROOT_CONFIG_TOKEN,
        useValue: null
      },
      {
        provide: ProgressButtonConfig,
        useFactory: progressButtonConfigFactory,
        deps: [FOR_ROOT_CONFIG_TOKEN]
      }]
  }));
  beforeEach(() => {
    defaultConfig = new ProgressButtonConfig();
  });


  it('should be created', () => {
    const service: ProgressButtonService = TestBed.get(ProgressButtonService);
    expect(service).toBeTruthy();
  });

  it('should check data in mergeOptions', () => {
    const merged = mergeOptions(null, {test: 'test'});
    expect(merged).toEqual({test: 'test'}, 'equal to source on null data');
    const merged2 = mergeOptions({test: 'test2', val: '2'}, {test: 'test', val2: ''});
    expect(merged2).toEqual({test: 'test2', val2: ''}, 'equal to source on null data');
  });

  it('should return config progressButtonConfigFactory', () => {
    const config: ProgressButtonConfig = progressButtonConfigFactory(
      {design: {background: '#f20'}, progress: {animation: 'shrink'}});
    expect(config.progress.animation).toEqual('shrink', 'shrink as defined from params');
    expect(config.design.background).toEqual('#f20', '#f20 as defined from params');
    expect(config.design.color).toEqual('#FFFFFF', '#FFFFFF as default values');
  });

  it('should update properties according to config', () => {
    const config: ProgressButtonConfig = new ProgressButtonConfig();
    config.design = {background: '#F20', successBackground: '#000', linesSize: null};
    config.progress = {animation: 'shrink'};
    const service: ProgressButtonService = new ProgressButtonService(config);
    expect(service.design.background).toEqual('#F20', ' #f20 for design background');
    expect(service.progress.animation).toEqual('shrink', 'shrink for progress animation');
    // Test Null
    const config2: ProgressButtonConfig = {
      design: null,
      progress: null
    };
    const service2: ProgressButtonService = new ProgressButtonService(config2);
    expect(service2.design).toEqual(defaultConfig.design, 'as default values for config.design = null');
    expect(service2.progress).toEqual(defaultConfig.progress, 'as default values for config.progress = null');
  });

  it('should change perspective according to progress animation', () => {
    const service: ProgressButtonService = new ProgressButtonService();
    service.progress.animation = 'rotate-angle-top';
    expect(service.status.perspective).toBe('', 'empty for animations that start with "rotate-"');
    service.progress.animation = 'flip-open';
    expect(service.status.perspective).toBe('', 'empty for animations that start with "flip-"');
    service.progress.animation = 'move-up';
    expect(service.status.perspective).toBe(null, 'null for others');
  });

  it('should change progress inner style according to progress animation', () => {
    const service: ProgressButtonService = new ProgressButtonService();
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
    expect(progressInner.width).toBe('10%', '10% for shrink animation (width radius)');
  });

  it('should change contentStyle according to progress animation', () => {
    const service: ProgressButtonService = new ProgressButtonService();
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
    const service: ProgressButtonService = new ProgressButtonService();
    service.design.successBackground = '#010101';
    let button = service.styles(0, 'state-success').button;
    expect(button.background).toBe(service.design.successBackground, service.design.successBackground + ' for state-success');
    service.design.errorBackground = '#F20';
    button = service.styles(0, 'state-error').button;
    expect(button.background).toBe(service.design.errorBackground, service.design.errorBackground + ' for state-error');
  });

  it('should change button style background according to the perspective', () => {
    const service: ProgressButtonService = new ProgressButtonService();
    service.progress = {animation: 'rotate-angle-top'};
    let button = service.styles(0, null).button;
    expect(button.background).toBe(null, ' null for perspective animation');
    service.progress = {animation: 'fill'};
    button = service.styles(0, null).button;
    expect(button.background).toBe('#222222', ' #222222 for no perspective animation');
  });

});

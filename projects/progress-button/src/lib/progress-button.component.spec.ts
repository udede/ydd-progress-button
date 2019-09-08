import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProgressButtonComponent} from './progress-button.component';

describe('ProgressButtonComponent', () => {
  let comp: ProgressButtonComponent;
  let fixture: ComponentFixture<ProgressButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressButtonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressButtonComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('#progressStop() should change button status and design after init', (done) => {
    comp.progress.statusTime = 1000;
    comp.progressInit();
    const sub = comp.progressStop('success').subscribe({
      next(state): void {
        if (state === 'after-init') {
          expect(comp.progressValue).toBe(0, '0 on after-init');
          expect(comp.statusClass).toBe('state-success', 'state-error on after-init');
          sub.unsubscribe();
          done();
        }
      },
    });
  });

  it('#progressStop() should change button status and design on complete', (done) => {
    comp.progress.statusTime = 1000;
    comp.progressInit();
    const sub = comp.progressStop('error').subscribe({
      complete(): void {
        expect(comp.disabled).toBe(null, 'null after stop');
        expect(comp.statusClass).toBe('', 'empty after stop');
        sub.unsubscribe();
        done();
      }
    });
  });

  it('should change perspective according to progress animation', () => {
    comp.progress.animation = 'rotate-angle-top';
    expect(comp.perspective).toBe('', 'empty for animations that start with "rotate-"');
    comp.progress.animation = 'flip-open';
    expect(comp.perspective).toBe('', 'empty for animations that start with "flip-"');
    comp.progress.animation = 'move-up';
    expect(comp.perspective).toBe(null, 'null for others');
  });

  it('should change progress inner style according to progress animation', () => {
    expect(comp.progressInnerStyle.background).toBe('#555555', '#555555 for fill animation');
    expect(comp.progressInnerStyle.borderColor).toBe(null, 'null for fill animation');
    expect(comp.progressInnerStyle.borderLeftWidth).toBe(null, 'null for fill animation');
    expect(comp.progressInnerStyle.borderRightWidth).toBe(null, 'null for fill animation');
    expect(comp.progressInnerStyle.height).toBe(null, 'null for fill animation (horizontal)');
    expect(comp.progressInnerStyle.width).toBe('0%', '0% for fill animation (horizontal)');
    comp.progress.direction = 'vertical';
    expect(comp.progressInnerStyle.height).toBe('0%', '0% for fill animation (vertical)');
    expect(comp.progressInnerStyle.width).toBe(null, 'null for fill animation (vertical)');
    comp.progress = {animation: 'lateral-lines', direction: 'horizontal'};
    comp.design = {linesSize: 22};
    expect(comp.progressInnerStyle.background).toBe(null, 'null for lateral-lines animation');
    expect(comp.progressInnerStyle.borderColor).toBe('#555555', '#555555 for lateral-lines animation');
    expect(comp.progressInnerStyle.borderLeftWidth).toBe(comp.design.linesSize + 'px', '22px for lateral-lines animation');
    expect(comp.progressInnerStyle.borderRightWidth).toBe(comp.design.linesSize + 'px', '22px for lateral-lines animation');
    expect(comp.progressInnerStyle.height).toBe('0%', '0% for lateral-lines animation');
    expect(comp.progressInnerStyle.width).toBe(null, 'null for lateral-lines animation');
    comp.progress = {animation: 'top-line', direction: 'horizontal'};
    comp.design.linesSize = 20;
    expect(comp.progressInnerStyle.height).toBe(comp.design.linesSize + 'px', '20px for top-line animation (horizontal)');
    expect(comp.progressInnerStyle.width).toBe('0%', '0% for top-line animation (horizontal)');
    comp.progress = {animation: 'top-line', direction: 'vertical'};
    comp.design.linesSize = null;
    expect(comp.progressInnerStyle.width).toBe(comp.design.linesSize + 'px', '10px for top-line animation (vertical)');
  });

  it('should change contentStyle according to progress animation', () => {
    comp.progress = {animation: 'slide-down'};
    expect(comp.contentStyle.background).toEqual('#222222', '#222222 for slide-down');
    comp.progress = {animation: 'move-up'};
    expect(comp.contentStyle.background).toEqual('#222222', '#222222 for move-up');
    comp.progress = {animation: 'fill'};
    expect(comp.contentStyle.background).toEqual(null, 'null for others');
  });

  it('should change mainBackgroundColor according to the status', () => {
    comp.statusClass = 'state-success';
    comp.design.successBackground = '#010101';
    expect(comp.mainBackgroundColor).toBe(comp.design.successBackground, comp.design.successBackground + ' for state-success');
    comp.statusClass = 'state-error';
    comp.design.errorBackground = '#F20';
    expect(comp.mainBackgroundColor).toBe(comp.design.errorBackground, comp.design.errorBackground + ' for state-error');
  });

  it('should change buttonStyle background according to the perspective', () => {
    comp.progress = {animation: 'rotate-angle-top'};
    expect(comp.buttonStyle.background).toBe(null, ' null for perspective animation');
    comp.progress = {animation: 'fill'};
    expect(comp.buttonStyle.background).toBe(comp.mainBackgroundColor, comp.mainBackgroundColor + ' for no perspective animation');
  });

  it('should emit action when click', () => {
    spyOn(comp.action, 'emit');
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('button');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(comp.action.emit).toHaveBeenCalled();
  });
});



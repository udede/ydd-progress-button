import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProgressButtonComponent} from './progress-button.component';

describe('ProgressButtonComponent', () => {
  let component: ProgressButtonComponent;
  let fixture: ComponentFixture<ProgressButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressButtonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#progressStop() should change button status and design after init', (done) => {
    const comp = new ProgressButtonComponent();
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
    const comp = new ProgressButtonComponent();
    comp.progress.statusTime = 1000;
    comp.progressInit();
    const originalBg = comp.design.background;
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
    const comp = new ProgressButtonComponent();
    comp.progress.animation = 'rotate-angle-top';
    expect(comp.perspective).toBe('', 'empty for animations that start with "rotate-"');
    comp.progress.animation = 'flip-open';
    expect(comp.perspective).toBe('', 'empty for animations that start with "flip-"');
    comp.progress.animation = 'move-up';
    expect(comp.perspective).toBe(null, 'null for others');
  });

  it('should change progress inner style according to progress animation', () => {
    const comp = new ProgressButtonComponent();
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
    expect(comp.progressInnerStyle.background).toBe(null, 'null for lateral-lines animation');
    expect(comp.progressInnerStyle.borderColor).toBe('#555555', '#555555 for lateral-lines animation');
    expect(comp.progressInnerStyle.borderLeftWidth).toBe('10px', '10px for lateral-lines animation');
    expect(comp.progressInnerStyle.borderRightWidth).toBe('10px', '10px for lateral-lines animation');
    expect(comp.progressInnerStyle.height).toBe('0%', '0% for lateral-lines animation');
    expect(comp.progressInnerStyle.width).toBe(null, 'null for lateral-lines animation');
    comp.progress = {animation: 'top-line', direction: 'horizontal'};
    expect(comp.progressInnerStyle.height).toBe('10px', '10px for top-line animation (horizontal)');
    expect(comp.progressInnerStyle.width).toBe('0%', '0% for top-line animation (horizontal)');
  });
});

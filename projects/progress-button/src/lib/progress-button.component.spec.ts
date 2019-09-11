import {async, inject, ComponentFixture, TestBed} from '@angular/core/testing';
import {ProgressButtonComponent} from './progress-button.component';
import {ProgressButtonService} from './progress-button.service';
import {progressButtonServiceFactory} from './progress-button.types';

describe('ProgressButtonComponent', () => {
  let comp: ProgressButtonComponent;
  let fixture: ComponentFixture<ProgressButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressButtonComponent],
      providers: [{
        provide: ProgressButtonService,
        useFactory: progressButtonServiceFactory(null)
      }]
    })
      .compileComponents();
  }));

  beforeEach(async(inject([ProgressButtonService], (service: ProgressButtonService) => {
    fixture = TestBed.createComponent(ProgressButtonComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  })));

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

  it('should emit action when click', () => {
    spyOn(comp.action, 'emit');
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('button');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(comp.action.emit).toHaveBeenCalled();
  });
});



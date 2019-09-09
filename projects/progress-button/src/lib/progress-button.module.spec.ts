import {async, TestBed} from '@angular/core/testing';
import {ProgressButtonModule} from './progress-button.module';

describe('ProgressButtonModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ProgressButtonModule.forRoot({design: {background: '#f20'}})]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ProgressButtonModule).toBeDefined();
  });
});

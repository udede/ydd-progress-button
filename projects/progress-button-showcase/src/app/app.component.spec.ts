import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {ProgressButtonModule} from '../../../progress-button/src/lib/progress-button.module';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MarkdownModule, MarkedOptions} from 'ngx-markdown';
import {markedOptionsFactory} from './app.component.models';
import {ProgressButtonComponent} from '../../../progress-button/src/lib/progress-button.component';
import {NgScrollbarModule} from 'ngx-scrollbar';


describe('AppComponent', () => {
  beforeEach(async(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        ProgressButtonModule,
        NgSelectModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgScrollbarModule,
        MarkdownModule.forRoot({
          loader: HttpClient,
          markedOptions: {
            provide: MarkedOptions,
            useFactory: markedOptionsFactory,
          }
        })
      ],
      providers: [],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should copy on clipboard', (done) => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.clipboardCopied = false;
    app.copyClipboard('test123');
    expect(app.clipboardCopied).toBe(true, ' copyClipboard was copied and message displayed');
    setTimeout(() => {
      expect(app.clipboardCopied).toEqual(false, ' clipboard copied message is dismissed correctly');
      done();
    }, 1100);
    app.clipboardCopied = true;
    app.copyClipboard('test123');
    expect(app.clipboardCopied).toBe(true, ' copyClipboard was not copied because is currently copying');
  });


  it('should execute progress as expected', (done) => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const progressC = TestBed.createComponent(ProgressButtonComponent).debugElement.componentInstance;
    app.run(progressC);
    fixture.detectChanges();
    expect(progressC.progressValue).toBe(0);
    const t0 = setTimeout(() => {
      fixture.detectChanges();
      expect(progressC.progressValue).toBe(5);
      const t1 = setTimeout(() => {
        fixture.detectChanges();
        expect(progressC.progressValue).toBe(100);
        const t2 = setTimeout(() => {
          fixture.detectChanges();
          expect(progressC.progressValue).toBe(0);
          expect(progressC.statusClass).toBe('');
          clearTimeout(t0);
          clearTimeout(t1);
          clearTimeout(t2);
          done();
        }, 2000);
      }, 3800);
    }, 200);
  });
});

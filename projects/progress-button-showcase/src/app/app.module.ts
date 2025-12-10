import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProgressButtonModule} from '../../../progress-button/src/lib/progress-button.module';
import {NgSelectModule} from '@ng-select/ng-select';
import {MarkdownModule, MARKED_OPTIONS} from 'ngx-markdown';
import {provideHttpClient} from '@angular/common/http';
import {markedOptionsFactory} from './app.component.models';
import {NgScrollbarModule} from 'ngx-scrollbar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProgressButtonModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgScrollbarModule,
    MarkdownModule.forRoot()
  ],
  providers: [
    provideHttpClient(),
    {
      provide: MARKED_OPTIONS,
      useFactory: markedOptionsFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

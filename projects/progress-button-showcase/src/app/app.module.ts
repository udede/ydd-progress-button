import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProgressButtonModule} from '../../../progress-button/src/lib/progress-button.module';
import {NgSelectModule} from '@ng-select/ng-select';
import {MarkdownModule, MarkedOptions} from 'ngx-markdown';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {markedOptionsFactory} from './app.component.models';

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
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptionsFactory,
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

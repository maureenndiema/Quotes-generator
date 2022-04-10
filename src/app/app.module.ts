import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HighlightDirective } from './highlight.directive';
import { QuoteDetailComponent } from './quotes/quote-detail/quote-detail.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { DateCountPipe } from './date-count.pipe';
import { LikeButtonComponent } from './quotes/quote-detail/like-button/like-button.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    NavbarComponent,
    HighlightDirective,
    QuoteDetailComponent,
    QuoteFormComponent,
    DateCountPipe,
    LikeButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, NavbarComponent]
})
export class AppModule { }

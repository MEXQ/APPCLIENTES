import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { QuotesComponent } from './quotes/quotes.component';
import {routing} from "./app.routing";
import {QuoteService} from "./quote.service";

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    NewQuoteComponent,
    QuotesComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }

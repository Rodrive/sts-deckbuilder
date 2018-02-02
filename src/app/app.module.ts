import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AbstractDataService } from './core/abstract-data.service';
import { CoreModule } from './core/core.module';
import { CardsModule } from './cards/cards.module';
import { RelicsModule } from './relics/relics.module';
import { DeckModule } from './deck/deck.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    CardsModule,
    RelicsModule,
    DeckModule,
  ],
  providers: [AbstractDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

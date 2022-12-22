import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MyappsComponent } from './myapps/myapps.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TodonotesComponent } from './todonotes/todonotes.component';
import { CurrencyComponent } from './currency/currency.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GameComponent } from './game/game.component';
import { BoardComponent } from './board/board.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    MyappsComponent,
    CalculatorComponent,
    TodonotesComponent,
    CurrencyComponent,
    TictactoeComponent,
    GameComponent,
    BoardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

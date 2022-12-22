import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CurrencyComponent } from './currency/currency.component';
import { HomeComponent } from './home/home.component';
import { MyappsComponent } from './myapps/myapps.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';
import { TodonotesComponent } from './todonotes/todonotes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },

  { path: 'about', component: AboutComponent },
  {
    path: 'myapps',
    component: MyappsComponent,
    children: [
      { path: 'todonotes', component: TodonotesComponent },
      { path: 'currency', component: CurrencyComponent },
      { path: 'calculator', component: CalculatorComponent },
      { path: 'tictactoe', component: TictactoeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

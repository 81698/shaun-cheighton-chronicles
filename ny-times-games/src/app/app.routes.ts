import { Routes } from '@angular/router';
import { StrandsComponent } from './strands/strands.component';
import { HomeComponent } from './home/home.component';
import { WordleComponent } from './wordle/wordle.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'strands', component: StrandsComponent },
  { path: 'wordle', component: WordleComponent },
];

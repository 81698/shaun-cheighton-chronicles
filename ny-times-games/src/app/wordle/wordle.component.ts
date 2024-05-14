import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-wordle',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],
  templateUrl: './wordle.component.html',
  styleUrl: './wordle.component.scss',
})
export class WordleComponent {}

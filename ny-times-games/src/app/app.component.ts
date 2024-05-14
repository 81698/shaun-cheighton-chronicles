import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { StrandsComponent } from './strands/strands.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    StrandsComponent,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatMenuModule,
    MatIcon,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
  ],
})
export class AppComponent {
  title = 'ny-times-games';
}

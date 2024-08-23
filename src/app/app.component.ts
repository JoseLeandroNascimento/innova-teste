import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DesafiosComponent } from "./pages/desafios/desafios.component";
import { CronogramasComponent } from "./pages/cronogramas/cronogramas.component";
import { PremiacaoComponent } from "./pages/premiacao/premiacao.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    DesafiosComponent,
    CronogramasComponent,
    PremiacaoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'innova-teste';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DesafiosComponent } from "./pages/desafios/desafios.component";
import { CronogramasComponent } from "./pages/cronogramas/cronogramas.component";
import { PremiacaoComponent } from "./pages/premiacao/premiacao.component";
import { InscricaoComponent } from "./pages/inscricao/inscricao.component";
import { FooterComponent } from "./shared/components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    DesafiosComponent,
    CronogramasComponent,
    PremiacaoComponent,
    InscricaoComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'innova-teste';
}

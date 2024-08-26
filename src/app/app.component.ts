import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CronogramasComponent } from "./pages/cronogramas/cronogramas.component";
import { DesafiosComponent } from "./pages/desafios/desafios.component";
import { HomeComponent } from './pages/home/home.component';
import { InscricaoComponent } from "./pages/inscricao/inscricao.component";
import { PremiacaoComponent } from "./pages/premiacao/premiacao.component";
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

  isVisible: boolean = false;

  ngOnInit(): void {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkScroll();
  }

  private checkScroll(): void {
    const scrollPosition = window.scrollY;
    this.isVisible = scrollPosition > 300;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

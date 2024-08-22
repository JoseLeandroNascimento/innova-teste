import { Component } from '@angular/core';
import { DesafioCardComponent } from '../../shared/components/desafio-card/desafio-card.component';

@Component({
  selector: 'app-desafios',
  standalone: true,
  imports: [
    DesafioCardComponent
  ],
  templateUrl: './desafios.component.html',
  styleUrl: './desafios.component.scss'
})
export class DesafiosComponent {

}

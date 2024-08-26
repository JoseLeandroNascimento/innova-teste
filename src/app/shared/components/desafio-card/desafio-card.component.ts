import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-desafio-card',
  standalone: true,
  imports: [],
  templateUrl: './desafio-card.component.html',
  styleUrl: './desafio-card.component.scss'
})
export class DesafioCardComponent {

  @Input({ required: true }) img!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) options!: string[];

}

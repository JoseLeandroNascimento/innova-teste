import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cronograma-card',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './cronograma-card.component.html',
  styleUrl: './cronograma-card.component.scss'
})
export class CronogramaCardComponent {

  @Input({ required: true }) startDate!: Date
  @Input() endDate?: Date
  @Input({ required: true }) description!: string

}

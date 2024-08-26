import { Component } from '@angular/core';

import { CronogramaCardComponent } from '../../shared/components/cronograma-card/cronograma-card.component';
import { CronogramaResponse } from '../../core/models/cronogramaResponse.';

@Component({
  selector: 'app-cronogramas',
  standalone: true,
  imports: [
    CronogramaCardComponent
  ],
  templateUrl: './cronogramas.component.html',
  styleUrl: './cronogramas.component.scss'
})
export class CronogramasComponent {

  protected cronogramas: CronogramaResponse[] = [
    {
      startDate: new Date(2024, 3, 19),
      endDate: new Date(2024, 3, 19),
      description: "Lançamento e palestra"
    },
    {
      startDate: new Date(2024, 3, 19),
      endDate: new Date(2024, 4, 19),
      description: "Inscrições"
    },
    {
      startDate: new Date(2024, 5, 7),
      endDate: new Date(2024, 5, 7),
      description: "Pitch Day e seleção das propostas para a segunda etapa"
    },
    {
      startDate: new Date(2024, 5, 12),
      endDate: new Date(2024, 5, 12),
      description: "Divulgação das propostas selecionadas"
    },
    {
      startDate: new Date(2024, 5, 14),
      description: "Mentorias e desenvolvimento das iniciativas"
    },
    {
      startDate: new Date(2024, 3, 28),
      endDate: new Date(2024, 3, 28),
      description: "Visita técnica"
    },
    {
      startDate: new Date(2024, 7, 30),
      endDate: new Date(2024, 7, 30),
      description: "Pitch Day final, divulgação do ranking e evento de premiação"
    }
  ]
}

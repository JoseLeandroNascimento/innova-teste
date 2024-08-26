import { Component } from '@angular/core';
import { DesafioCardComponent } from '../../shared/components/desafio-card/desafio-card.component';
import { DesafioResponse } from '../../core/models/desafioResponse';

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

  protected desafios: DesafioResponse[] = [
    {
      img: "assets/imgs/ico_desafio1.svg",
      title: "Gestão e Monitoramento de Recursos Hídricos",
      options: [
        "Tecnologias e automação de sistemas irrigados por meio de soluções que visam melhorar a eficiência e eficácia na utilização dos recursos hídricos.",
        "Novas tecnologias relacionadas ao tema deste item."
      ]
    },
    {
      img: "assets/imgs/ico_desafio2.svg",
      title: "Monitoramento de Pragas e Doenças",
      options: [
        "Sistemas e/ou novas tecnologias que contribuam para a melhoria da detecção e monitoramento de pragas e doenças, utilizando ou não, inteligência preditiva."
      ]
    },
    {
      img: "assets/imgs/ico_desafio3.svg",
      title: "Bioprodutos",
      options: [
        "Desenvolvimento de bioinsumos de eficiência aumentada para o incremento da produção, da qualidade da produção e/ou proteção de plantas contra estresses bióticos e abióticos, tais como agentes de controle biológico; bioestimulantes; biofertilizantes; condicionadores de ambientes; entre outros.",

      ]
    },
    {
      img: "assets/imgs/ico_desafio4.svg",
      title: "Máquinas e Implementos Agrícolas",
      options: [
        "Interações entre máquina-solo-planta que busquem sistemas produtivos mais eficientes.",
        "Soluções que contribuam para a otimização e melhoria no sistema de colheita de feijão.",
        "Novas tecnologias relacionadas ao tema deste item."
      ]
    }
  ]
}

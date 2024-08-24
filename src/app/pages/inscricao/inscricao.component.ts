import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-inscricao',
  standalone: true,
  imports: [
    ButtonComponent,
    NgxMaskDirective
  ],
  templateUrl: './inscricao.component.html',
  styleUrl: './inscricao.component.scss'
})
export class InscricaoComponent {

}

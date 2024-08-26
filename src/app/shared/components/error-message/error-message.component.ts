import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [],
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.scss'
})
export class ErrorMessageComponent {

  @Input({ required: true }) control!: AbstractControl
  @Input() customErrors: { [key: string]: string } = {};

  get errorMessage(): string | null {
    if (this.control.errors && (this.control.dirty || this.control.touched)) {
      for (const key in this.control.errors) {
        if (this.customErrors[key]) {
          return this.customErrors[key];
        }
        return this.getDefaultErrorMessage(key, this.control.errors[key]);
      }
    }
    return null;
  }

  private getDefaultErrorMessage(errorKey: string, errorValue: any): string {
    const defaultMessages: { [key: string]: string } = {
      required: 'Este campo é obrigatório',
      minlength: `O valor deve ter no mínimo ${errorValue.requiredLength} caracteres`,
      maxlength: `O valor deve ter no máximo ${errorValue.requiredLength} caracteres`,
      email: 'O e-mail deve ser válido',
      pattern: 'O formato do campo é inválido',
    };
    return defaultMessages[errorKey] || 'Erro desconhecido';
  }
}

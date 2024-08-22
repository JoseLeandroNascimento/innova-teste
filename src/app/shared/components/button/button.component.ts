import { Component, input } from '@angular/core';

@Component({
  selector: 'button[app-button],a[app-button]',
  standalone: true,
  imports: [],
  template: '<ng-content ></ng-content>',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  public typeButton = input<string>();
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-joy-stick-button',
  templateUrl: './joy-stick-button.component.html',
  styleUrls: ['./joy-stick-button.component.scss']
})
export class JoyStickButtonComponent {
@Input() textButton: string = '';
}

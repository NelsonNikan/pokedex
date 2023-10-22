import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-poke-input',
  templateUrl: './poke-input.component.html',
  styleUrls: ['./poke-input.component.scss']
})
export class PokeInputComponent {

  inputValue: string = '';
  @Output() valueChange = new EventEmitter<any>();
  @Input() placeholder: string = '';

  onInputChange() {
    console.log( 'input', this.inputValue)
    this.valueChange.emit(this.inputValue);
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoyStickButtonComponent } from './components/joy-stick-button/joy-stick-button.component';
import { PokeInputComponent } from './components/poke-input/poke-input.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [JoyStickButtonComponent, PokeInputComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[JoyStickButtonComponent, PokeInputComponent]
})
export class SharedModule { }

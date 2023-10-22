import { Component } from '@angular/core';
import { Pokemon } from 'src/app/shared/Interfaces/pokemon.interface';
import { IPokemonService } from 'src/app/shared/services/pokemon/pokemon.service.interface';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent {
  public value: any;
  public pokemonInfos: Pokemon = { animation: '', name: ''};
  public pokeNumber:number = 1;

  constructor(
    private pokeService: IPokemonService
){
  this.getPokemon(1)
  }


private async getPokemon(pokemon: string | number): Promise<void>{
  console.log('fui chamado')
  try{
    this.pokeService.showPokemon(pokemon).subscribe((res: Pokemon) =>{
      this.pokemonInfos = { animation: res.animation, name: res.name}
    });
  }catch{

  }
}

public searchPokemon(pokemonName: string): void{
  pokemonName.length < 3 ? null : this.getPokemon(pokemonName);
} 

public changePokemon(change: string): void{
  switch(change){
    case 'next':
      this.pokeNumber = this.pokeNumber +1;
      this.getPokemon(this.pokeNumber)
      break;
    case 'back':
      this.pokeNumber = this.pokeNumber - 1;
      this.getPokemon(this.pokeNumber)
      break;
  }
}

}

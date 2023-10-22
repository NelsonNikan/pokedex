import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { map, shareReplay } from 'rxjs/operators';
import { IPokemonService } from './pokemon.service.interface';
import { Pokemon } from '../../Interfaces/pokemon.interface';
@Injectable({
  providedIn: 'root'
})
export class PokemonService implements IPokemonService {

  readonly ulrPokeApi = 'https://pokeapi.co/api/v2/pokemon/'
  constructor(
   private http: HttpClient
  ) { 
  }

  public showPokemon(pokemon: string | number): Observable<Pokemon>{
    console.log('to locao')
    return this.http.get<any>(this.ulrPokeApi + pokemon)
    .pipe(
      map(( response ) => {
        return {
          animation: response.sprites.versions['generation-v']['black-white']['animated']['front_default'],
          name: response.name
        }
      }
      ),shareReplay(1));
  
}
}

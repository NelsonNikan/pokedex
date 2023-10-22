import { Observable } from 'rxjs'

export abstract class IPokemonService {
  /**
   * @description Abstrai a navegação dentro do módulo. Todos os redirecionamentos ficam centralizados aqui.
   */

  /**
   * @param Pokemon recebe um pokemon por paramentros
   *
   * @return void: Não tem retorno. Faz a navegação para a rota que recebe como parametro
   */
  abstract showPokemon(pokemon: string | number): Observable<any>;
}

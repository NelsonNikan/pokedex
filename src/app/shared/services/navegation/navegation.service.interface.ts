export abstract class INavegationService {
  /**
   * @description Abstrai a navegação dentro do módulo. Todos os redirecionamentos ficam centralizados aqui.
   */

  /**
   * @param navegate recebe a rota de navegação por paramentros
   *
   * @return void: Não tem retorno. Faz a navegação para a rota que recebe como parametro
   */
  abstract navegar(navegate: string): void;

  /**
   * @returns Retorna o path da rota atual do navegador
   */
  abstract get getLocation(): string;
}

import { Observable } from 'rxjs';
import { AuthOptions } from 'src/app/shared/Interfaces/authOptions.interface';
import firebase from 'firebase/compat';

/**
 * @description Esta classe implementa os métodos de autenticação e retorna as validações de usuário autenticado ou não.
 * Implementa também o método de logout da aplicação
 */

export abstract class IAuthService {
  /**
   * @returns Retorna um observable contendo um booleano.
   * False = não autenticado
   * True = autenticado
   */
  abstract get isAuthenticated(): Observable<boolean>;

  /**
   * @param authOptions recebe os valores de:
   * isSignIn: boolean (recebe o tipo de ação que está sendo feita pelo usuário [login ou cadastro])
   * provider: AuthProvider (recebe o tipo de servidor de autenticação [Email, Facebook, Gmail])
   * user: User (recebe os dados do usuário [email, senha, nome])
   *
   * @returns retorna um objeto do tipo <firebase.auth.UserCredential> contendo o tipo de autenticação com as configurações necessárias para efetuar o
   * login ou o cadastro.
   */
  abstract authentication(
    authOptions: AuthOptions
  ): Promise<firebase.auth.UserCredential>;

  /**
   * Navega para a home após efeturar o logout da aplicação
   */
  abstract logout(): Promise<void>;
}

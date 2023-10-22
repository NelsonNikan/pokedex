import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthProvider } from 'src/app/shared/Interfaces/auth.types';
import { AuthOptions } from 'src/app/shared/Interfaces/authOptions.interface';
import { User } from 'src/app/shared/Interfaces/user.interface';
import { IAuthService } from './auth.service.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements IAuthService {
  authState$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.authState$ = this.afAuth.authState as any;
  }

  get isAuthenticated(): Observable<boolean> {
    return this.authState$.pipe(map((user) => user !== null));
  }

  authentication({
    isSignIn,
    provider,
    user,
  }: AuthOptions): Promise<firebase.auth.UserCredential> {
    let operation: Promise<firebase.auth.UserCredential>;

    if (provider !== AuthProvider.Email) {
      operation = this.LoginWithPopUp(provider);
    } else {
      operation = isSignIn
        ? this.loginWithEmail(user)
        : this.signUpWithEmail(user);
    }
    return operation;
  }

  logout(): Promise<void> {
    this.router.navigate(['home']);
    return this.afAuth.signOut();
  }

  private loginWithEmail(user: User): Promise<firebase.auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(user.email, user.senha);
  }

  private signUpWithEmail({
    email,
    senha,
    name,
  }: User): Promise<firebase.auth.UserCredential> {
    return this.afAuth
      .createUserWithEmailAndPassword(email, senha)
      .then((credentials: any) =>
        credentials.user
          .updateProfile({ displayName: name, photoURL: null })
          .then(() => credentials)
      );
  }

  private LoginWithPopUp(
    provider: AuthProvider
  ): Promise<firebase.auth.UserCredential> {
    let signInProvider = null;

    switch (provider) {
      case AuthProvider.Facebook:
        signInProvider = new firebase.auth.FacebookAuthProvider();
        break;
      case AuthProvider.Google:
        signInProvider = new firebase.auth.GoogleAuthProvider();
        break;
    }

    return this.afAuth.signInWithPopup(signInProvider as any);
  }

   recuperarSenha(email: any): Promise<any>{
   return this.afAuth.sendPasswordResetEmail(email)
  }
}

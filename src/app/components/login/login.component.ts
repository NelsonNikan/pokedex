import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthProvider } from 'src/app/shared/Interfaces/auth.types';
import { INavegationService } from 'src/app/shared/services/navegation/navegation.service.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  authProviders: any;
  configs = {
    isSignIn: true,
    action: 'Login',
    actionChange: 'Cadastrar',
    title: 'Login',
  };

  private nameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private dialogRef: MatDialogRef<LoginComponent>,
    private navegationService: INavegationService
  ) {
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });

    this.authProviders = AuthProvider;
  }

  ngOnInit(): void {
  }

  get emailFormControl() {
    return this.form.value.email;
  }
  get passwordFormControl() {
    return this.form.value.senha;
  }
  get nameFormControl() {
    return this.form.value.name;
  }

  changeAuthAction(): void {
    this.configs.isSignIn = !this.configs.isSignIn;
    const { isSignIn } = this.configs;
    this.configs.action = isSignIn ? 'Login' : 'Cadastrar';
    this.configs.title = isSignIn ? 'Login' : 'Cadastro';
    this.configs.actionChange = isSignIn
      ? 'Criar uma conta'
      : 'Já possuo uma conta';

    !isSignIn
      ? this.form.addControl('name', this.nameControl)
      : this.form.removeControl('name');
  }

  async login(provider: AuthProvider): Promise<void> {
    try {
      const credentials = await this.authService.authentication({
        isSignIn: this.configs.isSignIn,
        user: this.form.value,
        provider,
      });
      this.dialogRef.close();
    } catch (e) {
      this.dialogRef.close();
    } finally {
      this.dialogRef.close();
    }
  }

  navegar(navegation: any) {
    this.dialogRef.close();
    this.navegationService.navegar(navegation);
  }

  async rescuePassword(){
    const email = this.form.value.email
    this.authService.recuperarSenha(email)
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PokedexCloseComponent } from './components/pokedex-close/pokedex-close.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { IPokemonService } from './shared/services/pokemon/pokemon.service.interface';
import { NavegationService } from './shared/services/navegation/navegation.service';
import { MatCommonModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokemonService } from './shared/services/pokemon/pokemon.service';
import { INavegationService } from './shared/services/navegation/navegation.service.interface';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PokedexCloseComponent,
    LoginComponent,
    PokedexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    MatCommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: INavegationService, useClass: NavegationService }, {provide: IPokemonService, useClass: PokemonService}],

})
export class AppModule { }

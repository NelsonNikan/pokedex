import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokedexCloseComponent } from './components/pokedex-close/pokedex-close.component';

const routes: Routes = [ 
  {path: '', component: PokedexCloseComponent},
  { path: 'pokedex', component: PokedexComponent,
    canLoad: [AuthGuard],
    canActivate: [AuthGuard] },
    {path: 'not-found', component: PokedexCloseComponent},
    {path: '**', redirectTo: '/not-found'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListaContatosComponent } from './lista-contatos/lista-contatos.component';
import { NautilusAdminGuard, NautilusGuard } from './service/nautilus.guard';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { FormContatosComponent } from './form-contatos/form-contatos.component';
import { FormUsuariosComponent } from './form-usuarios/form-usuarios.component';
import { NotFoundComponent } from './sharedComponents/not-found/not-found.component';



const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'lista-contatos', component: ListaContatosComponent, canActivate: [ NautilusGuard ]},
  {path: 'lista-usuarios', component: ListaUsuariosComponent, canActivate: [ NautilusGuard ]},
  {path: 'cadastro-contatos', component: FormContatosComponent, canActivate: [ NautilusGuard ]},
  {path: 'cadastro-usuarios', component: FormUsuariosComponent, canActivate: [ NautilusAdminGuard ]},
  {path: '**', component: NotFoundComponent}


];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
           ],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }

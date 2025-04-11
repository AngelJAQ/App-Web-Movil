import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { InstruccionesScreenComponent } from './screens/instrucciones-screen/instrucciones-screen.component';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { PerfilUsuarioScreenComponent } from './screens/perfil-usuario-screen/perfil-usuario-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';

const routes: Routes = [
  {path: '', component: LoginScreenComponent, pathMatch: 'full'},
  {path: 'registro', component: RegistroScreenComponent, pathMatch: 'full'},
  {path: 'home', component: HomeScreenComponent, pathMatch: 'full'},
  {path: 'perfil', component: PerfilUsuarioScreenComponent, pathMatch: 'full'},

  {path: 'intrucciones', component: InstruccionesScreenComponent, pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

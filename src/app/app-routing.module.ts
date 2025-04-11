import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { InstruccionesScreenComponent } from './screens/instrucciones-screen/instrucciones-screen.component';

const routes: Routes = [
  {path: '', component: LoginScreenComponent, pathMatch: 'full'},
  {path: 'intrucciones', component: InstruccionesScreenComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';


//Material:
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';


//Mascara
import {NgxMaskDirective, provideNgxMask} from 'ngx-mask';


//Componentes creados
import { InstruccionesScreenComponent } from './screens/instrucciones-screen/instrucciones-screen.component';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { LeftSidebarComponent } from './partials/left-sidebar/left-sidebar.component';
import { HeaderAppComponent } from './partials/header-app/header-app.component';
import { FooterAppComponent } from './partials/footer-app/footer-app.component';
import { PerfilUsuarioScreenComponent } from './screens/perfil-usuario-screen/perfil-usuario-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    InstruccionesScreenComponent,
    RegistroScreenComponent,
    LeftSidebarComponent,
    HeaderAppComponent,
    FooterAppComponent,
    PerfilUsuarioScreenComponent,
    HomeScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    NgxMaskDirective,
    MatSidenavModule
  ],
  providers: [
    provideNgxMask()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

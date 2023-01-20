import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaComponent } from './component/lista/lista.component';
import { LoginComponent } from './component/login/login.component';
import { LoginAdministradorComponent } from './component/login-administrador/login-administrador.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { StudentsComponent } from './component/students/students.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    LoginComponent,
    LoginAdministradorComponent,
    NavbarComponent,
    StudentsComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

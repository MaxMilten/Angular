import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormularioReactivoComponent } from './components/formulario-reactivo/formulario-reactivo.component';
import { NgbAccordionModule, NgbTooltipModule, NgbPopoverModule,NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { JsonPipe } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    FormularioReactivoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgbAccordionModule,
    NgbTooltipModule,
    NgbPopoverModule,
    NgbProgressbarModule,
    JsonPipe,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { 
}

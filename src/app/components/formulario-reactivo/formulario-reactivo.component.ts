import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';


const states = [
	'Ecuador',
	'Peru',
	'México',
	'Argentina',
	'Chile',
	'Uruguay',
	'Paraguay',
	'Venezuela',
	'Brasil',
	'Colombia',
	'Nicaragua',
	'El Salvador',
];
@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent {
  public model: any;

	formatter = (result: string) => result.toUpperCase();

	search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
		text$.pipe(
			debounceTime(200),
			distinctUntilChanged(),
			map((term) =>
				term === '' ? [] : states.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
			),
		);


  formularioLogin: FormGroup;
  constructor()
  {
    let controler: any = 
    {
      correo: new FormControl('', [Validators.required, Validators.pattern('^[^@]+@[^@]+\.[a-zA-Z]{2,}$')]),
      contrasena: new FormControl('', [Validators.required, Validators.minLength(6)]),
      recordarCredencial: new FormControl(false, []),
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      edad: new FormControl(0, [Validators.required]),
      fechaNac: new FormControl([Validators.required]),
      pais: new FormControl([Validators.required])
    }
    this.formularioLogin = new FormGroup(controler);
  }

  login()
  {    
  }


  
}

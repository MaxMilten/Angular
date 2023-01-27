import { Component } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {
    subtitulo:string = "Esto es un subtitulo";
    variable:number =5;
    estudianteActual:Estudiante ={
      edad:22,
      estaActivo:true,
      nombre:"Karla"
    };
    listaEstudante:Array<Estudiante> = [
      {
        edad:27,
        estaActivo:true,
        nombre:"Pepe"
      },
      {
        edad:28,
        estaActivo:true,
        nombre:"Pablo"
      },
      {
        edad:31,
        estaActivo:false,
        nombre:"Marcos"
      }
      ,
      {
        edad:22,
        estaActivo:false,
        nombre:"Manuel"
      }
      ,
      {
        edad:27,
        estaActivo:false,
        nombre:"Maria"
      }
      ,
      {
        edad:28,
        estaActivo:true,
        nombre:"Augusto"
      }
      ,
      {
        edad:28,
        estaActivo:true,
        nombre:"Denisse"
      }
      ]

}



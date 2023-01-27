import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectivaPersonalizada]'
})
export class DirectivaPersonalizadaDirective {

  constructor( private rederer:Renderer2, private elementref:ElementRef) 
  {
    rederer.setStyle(elementref.nativeElement,'background-color','grey');
   }

}

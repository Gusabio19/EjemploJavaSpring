import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
 
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html'
})
export class MainpageComponent   {
personajes : Personaje[] = [
  {
    nombre: 'Goku',
    poder: 1500
   },
   {
    nombre: 'Vegeta',
    poder: 1200
   },
   {
    nombre: 'Broly',
    poder: 1500
   },
   {
    nombre: 'Gohan',
    poder: 1300
   }
];
nuevo: Personaje={
  nombre:'Maestro Roshi',
  poder:1000
}

agregarNuevoPersonaje(argumento: Personaje){
  console.log("pelonchas-->"+argumento.nombre);
  this.personajes.push(argumento);
}
 

}

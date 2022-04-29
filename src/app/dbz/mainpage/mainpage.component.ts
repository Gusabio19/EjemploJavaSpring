import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';
 
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html'
})
export class MainpageComponent   {

//personajes: Personaje[] = [];

nuevo: Personaje={
  nombre:'Maestro Roshi',
  poder:1000
}

/*get personajes(): Personaje[]{
  return this.dbzService.personajes;
}

agregarNuevoPersonaje(argumento: Personaje){

  this.personajes.push(argumento);
}*/

constructor(){
//constructor(private dbzService: DbzService){
  //this.personajes = this.dbzService.personajes;
}

}

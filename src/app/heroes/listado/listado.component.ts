import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Batman', 'Linterna Verde', 'Mujer Maravilla', 'Superman', 'Flash', 'Shazam', 'Ciborg', 'Halcon'];
  heroeborrado: string = "";

  borrarHeroe() {
    const heroebor = this.heroes.shift() || '';
   
      this.heroeborrado = heroebor.toString();
  

  }

  borrarIndiceHeroe(indice: number) {
    const heroebor = this.heroes.splice(indice, 1);
    if (heroebor != null) {
      this.heroeborrado = heroebor.toString();
    }

  }
}


import { EstadoService } from './estado.service';
import { Component } from "@angular/core";

@Component({
  selector: 'ps-estados',
  templateUrl: "./estado.component.html"
})
export class EstadoComponent {
  estados: Object[] = [];

  codigo: 100125;
  nome: "Paraiba";


  constructor(estadoService: EstadoService) {
    estadoService.listEstados()
      .subscribe(estados => {
        console.log(estados)
        this.estados = estados
      })
  }

}

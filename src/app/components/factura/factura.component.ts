import { Component, inject, Inject, OnInit } from '@angular/core';
import { FacturaService } from '../../services/factura.service';
import { Factura } from '../../models/factura';

@Component({
  selector: 'app-factura',
  standalone: true,
  imports: [],
  templateUrl: './factura.component.html',
  styleUrl: './factura.component.css'
})
export class FacturaComponent implements OnInit{

  //esta variable se le adiganara los datos de la factura
  factura!: Factura;

  //inyectamos el servicio de esta manera o tambien se puede con el cosntructor
  private service = inject(FacturaService);

  //inyectamos con el constructor el service
  // constructor(private service: FacturaService){

  // }

  ngOnInit(): void {
    //definimos la factura en nuestr componente
    this.factura = this.service.getFActura();
  }
  
}

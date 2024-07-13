import { Injectable } from '@angular/core';
import { Factura } from '../models/factura';
import { facturaData } from '../data/factura.data';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  private factura: Factura = facturaData;

  constructor() {}

  getFactura(): Factura {
    const total = this.totalFactura();
    return {... this.factura, total};
  }

  totalFactura(){
    let total = 0;

    this.factura.items.forEach(item => {
      total += item.price * item.quantity;
    })
    return total;
    //segunda forma de calcular el total
    // return this.factura.items.reduce((total, item) => 
    //   total + item.total(), 0);
  }
}

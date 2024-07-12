import { Injectable } from '@angular/core';
import { Factura } from '../models/factura';
import { facturaData } from '../data/factura.data';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  private factura: Factura = facturaData;

  constructor() {}

  getFactura(): Factura {
    const total = this.totalFactura();
    return {... this.factura, total: total};
  }

  totalFactura(){
    // let total = 0;

    // this.factura.items.forEach(item => {
    //   total += item.total();
    // })
    // return total;
  }
}

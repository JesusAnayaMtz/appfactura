import { Injectable } from '@angular/core';
import { Factura } from '../models/factura';
import { facturaData } from '../data/factura.data';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  private factura: Factura = facturaData;

  constructor() {}

  getFActura(): Factura {
    return this.factura;
  }
}

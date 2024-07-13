import { Component, inject, Inject, OnInit } from '@angular/core';
import { FacturaService } from '../../services/factura.service';
import { Factura } from '../../models/factura';
import { FacturaViewComponent } from '../factura-view/factura-view.component';
import { ClientViewComponent } from '../client-view/client-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { ListItemsComponent } from '../list-items/list-items.component';
import { RowItemComponent } from '../row-item/row-item.component';
import { TotalComponent } from '../total/total.component';
import { Item } from '../../models/item';

@Component({
  selector: 'app-factura',
  standalone: true,
  imports: [FacturaViewComponent, ClientViewComponent,CompanyViewComponent,ListItemsComponent, TotalComponent],
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
    this.factura = this.service.getFactura();
  }

  removeItem(id: number){
    this.factura.items = this.factura.items.filter(Item => Item.id != id);
  }
  
}

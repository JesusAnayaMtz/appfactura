import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-factura-view',
  standalone: true,
  imports: [],
  templateUrl: './factura-view.component.html',
  styleUrl: './factura-view.component.css'
})
export class FacturaViewComponent {

  @Input() name!:string;
  @Input() id!: number;

}

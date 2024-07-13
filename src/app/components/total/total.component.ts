import { Component, Input } from '@angular/core';
import { Factura } from '../../models/factura';

@Component({
  selector: 'app-total',
  standalone: true,
  imports: [],
  templateUrl: './total.component.html',
  styleUrl: './total.component.css'
})
export class TotalComponent {

  @Input() total: number = 0;
}

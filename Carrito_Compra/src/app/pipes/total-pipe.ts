import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../models/producto';

@Pipe({
  name: 'total',
  standalone: true
})
export class TotalPipe implements PipeTransform {

  transform(productos: Producto[]): number {

    return productos.reduce(
      (total, producto) =>
        total + producto.precio * producto.cantidad,
      0
    );

  }
}
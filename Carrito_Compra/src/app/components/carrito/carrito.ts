import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Producto } from '../../models/producto';
import { CarritoService } from '../../services/carritoService';
import { obtenerIcono } from '../../utils/iconos';

import { SubtotalPipe } from '../../pipes/subtotal-pipe';
import { TotalPipe } from '../../pipes/total-pipe';

@Component({
  selector: 'app-carrito',
  standalone: true,

  imports: [
    CommonModule,
    SubtotalPipe,
    TotalPipe
  ],

  templateUrl: './carrito.html',
  styleUrl: './carrito.css'
})
export class Carrito {

  carrito: Producto[] = [];

  constructor(
    private carritoService: CarritoService
  ) {

    this.carritoService.carrito$
      .subscribe(productos => {

        this.carrito = productos;

      });

  }

  obtenerIcono(nombre: string): string {
    return obtenerIcono(nombre);
  }

  get totalArticulos(): number {
    return this.carrito.reduce((total, producto) => total + producto.cantidad, 0);
  }

  incrementar(producto: Producto): void {
    this.carritoService.cambiarCantidad(producto.id, producto.cantidad + 1);
  }

  decrementar(producto: Producto): void {
    this.carritoService.cambiarCantidad(producto.id, producto.cantidad - 1);
  }

  cambiarCantidad(
    producto: Producto,
    event: Event
  ): void {

    const input =
      event.target as HTMLInputElement;

    const cantidad =
      Number(input.value);

    this.carritoService.cambiarCantidad(
      producto.id,
      cantidad
    );
  }

  eliminarProducto(id: number): void {

    this.carritoService.eliminarProducto(id);

  }

  vaciarCarrito(): void {

    this.carritoService.vaciarCarrito();

  }
}

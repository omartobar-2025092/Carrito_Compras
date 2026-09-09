import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private carrito: Producto[] = [];

  private carritoSubject =
    new BehaviorSubject<Producto[]>([]);

  carrito$: Observable<Producto[]> =
    this.carritoSubject.asObservable();

  agregarProducto(producto: Producto): void {

    const productoExistente =
      this.carrito.find(p => p.id === producto.id);

    if (productoExistente) {

      productoExistente.cantidad++;

    } else {

      this.carrito.push({
        ...producto,
        cantidad: 1
      });

    }

    this.carritoSubject.next([...this.carrito]);
  }

  cambiarCantidad(
    id: number,
    cantidad: number
  ): void {

    const producto =
      this.carrito.find(p => p.id === id);

    if (!producto) {
      return;
    }

    if (cantidad <= 0) {
      this.eliminarProducto(id);
      return;
    }

    producto.cantidad = cantidad;

    this.carritoSubject.next([...this.carrito]);
  }

  eliminarProducto(id: number): void {

    this.carrito =
      this.carrito.filter(p => p.id !== id);

    this.carritoSubject.next([...this.carrito]);
  }

  vaciarCarrito(): void {

    this.carrito = [];

    this.carritoSubject.next([]);
  }
}

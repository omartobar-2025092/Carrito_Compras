import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

import { Productos } from './components/productos/productos';
import { Carrito } from './components/carrito/carrito';
import { CarritoService } from './services/carritoService';

@Component({
  selector: 'app-root',

  imports: [
    CommonModule,
    Productos,
    Carrito
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnDestroy {

  titulo = 'Carrito de Ventas';

  totalArticulos = 0;

  private suscripcion: Subscription;

  constructor(private carritoService: CarritoService) {

    this.suscripcion = this.carritoService.carrito$
      .subscribe(productos => {
        this.totalArticulos = productos.reduce(
          (total, producto) => total + producto.cantidad,
          0
        );
      });

  }

  irAlCarrito(): void {
    document
      .getElementById('carrito')
      ?.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Producto } from '../../models/producto';
import { CarritoService } from '../../services/carritoService';
import { obtenerIcono } from '../../utils/iconos';

@Component({
  selector: 'app-productos',
  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos {

  productos: Producto[] = [

    {
      id: 1,
      nombre: 'Teclado Mecánico',
      precio: 350,
      cantidad: 1
    },

    {
      id: 2,
      nombre: 'Mouse Gamer',
      precio: 175,
      cantidad: 1
    },

    {
      id: 3,
      nombre: 'Audífonos Gamer',
      precio: 250,
      cantidad: 1
    },

    {
      id: 4,
      nombre: 'Monitor 24"',
      precio: 1200,
      cantidad: 1
    },

    {
      id: 5,
      nombre: 'Mousepad Gamer',
      precio: 100,
      cantidad: 1
    }

  ];

  /** id del producto que acaba de agregarse, para mostrar la animación de confirmación */
  productoRecienAgregado: number | null = null;

  constructor(
    private carritoService: CarritoService
  ) {}

  obtenerIcono(nombre: string): string {
    return obtenerIcono(nombre);
  }

  agregarAlCarrito(producto: Producto): void {

    this.carritoService.agregarProducto(producto);

    this.productoRecienAgregado = producto.id;

    setTimeout(() => {
      if (this.productoRecienAgregado === producto.id) {
        this.productoRecienAgregado = null;
      }
    }, 1200);
  }
}

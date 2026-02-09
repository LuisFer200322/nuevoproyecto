import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-habitaciones',
  standalone: true,
  imports: [CommonModule, RouterLink], // <--- IMPORTANTE: Agrega esto
  templateUrl: './habitaciones.html',
  styleUrl: './habitaciones.css'
})
export class Habitaciones {
  
  // "Base de datos" ficticia
  habitaciones = [
    {
      nombre: 'Junior Suite',
      descripcion: 'Un espacio acogedor ideal para parejas. Cuenta con cama King Size, baño de mármol y vistas al jardín interior.',
      precio: 1500,
      imagen: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop',
      servicios: ['Wifi Alta Velocidad', 'Desayuno Incluido', 'Smart TV 50"']
    },
    {
      nombre: 'Executive Room',
      descripcion: 'Diseñada para el viajero de negocios. Incluye escritorio ergonómico, área de estar separada y acceso al Lounge Ejecutivo.',
      precio: 2800,
      imagen: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop',
      servicios: ['Wifi Dedicado', 'Minibar Premium', 'Servicio a la habitación 24h']
    },
    {
      nombre: 'Presidential Suite',
      descripcion: 'La joya de la corona. 120m² de puro lujo con terraza privada, jacuzzi, comedor para 6 personas y mayordomo personal.',
      precio: 5500,
      imagen: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop',
      servicios: ['Terraza & Jacuzzi', 'Mayordomo', 'Transporte Privado', 'Champagne de Bienvenida']
    }
  ];
}
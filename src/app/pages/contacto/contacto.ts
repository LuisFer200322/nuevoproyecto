import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class ContactoComponent {
  
  // Función para abrir el correo del usuario
  enviarCorreo(event: Event, nombre: string, email: string, asunto: string, mensaje: string) {
    event.preventDefault(); // Evita que la página se recargue

    // 1. Definir a quién le va a llegar el correo
    const correoDestino = "reservas@hotelelegancia.com";

    // 2. Preparar el cuerpo del mensaje (lo que va a decir el correo)
    const cuerpoCorreo = `Hola, mi nombre es ${nombre}.
    
    Mi correo de contacto es: ${email}
    
    Mensaje:
    ${mensaje}`;

    // 3. Crear el enlace mágico (mailto)
    // Usamos encodeURIComponent para que los espacios y saltos de línea funcionen bien
    const link = `mailto:${correoDestino}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpoCorreo)}`;

    // 4. Abrir la app de correo
    window.location.href = link;
  }
}
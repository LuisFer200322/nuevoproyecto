import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // <--- 1. Importar esto

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink], // <--- 2. Agregarlo a la lista de imports
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {
  // No necesitamos lógica extra aquí por ahora
}
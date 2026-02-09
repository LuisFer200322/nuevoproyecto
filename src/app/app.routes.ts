import { Routes } from '@angular/router';
// OJO AQUÍ: Las rutas apuntan a tus archivos tal cual los tienes
import { Inicio } from './pages/inicio/inicio';
import { Habitaciones } from './pages/habitaciones/habitaciones';
import { ContactoComponent } from './pages/contacto/contacto';

export const routes: Routes = [
  { path: '', component: Inicio },             // Página de inicio por defecto
  { path: 'habitaciones', component: Habitaciones },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '' }                        // Si la ruta no existe, manda a inicio
];
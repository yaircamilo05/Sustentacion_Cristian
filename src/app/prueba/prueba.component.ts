import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent {
  
    constructor(
      private router: Router
    ) { }

    cambiarRuta() {
      // Cambia la ruta a la que desees
      this.router.navigate(['/sustentacion']);
    }
  
    ngOnInit(): void {
    }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Parser} from 'expr-eval';
@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent {

  calcular: string="";
  texto: string = ''; 
    constructor(
      private router: Router
    ) { }

    cambiarRuta() {
      // Cambia la ruta a la que desees
      this.router.navigate(['/sustentacion']);
    }
  
    ngOnInit(): void {
    }
    numero1(){
      this.calcular=this.calcular+"1";
      this.texto=this.calcular;
      
    }
    numero2(){
      this.calcular=this.calcular+"2";
      this.texto=this.calcular;
      
    }
    numero3(){
      this.calcular=this.calcular+"3";
      this.texto=this.calcular;
      
    }
    numero4(){
      this.calcular=this.calcular+"4";
      this.texto=this.calcular;
      
    }
    numero5(){
      this.calcular=this.calcular+"5";
      this.texto=this.calcular;
      
    }
    numero6(){
      this.calcular=this.calcular+"6";
      this.texto=this.calcular;
      
    }
    numero7(){
      this.calcular=this.calcular+"7";
      this.texto=this.calcular;
      
    }
    numero8(){
      this.calcular=this.calcular+"8";
      this.texto=this.calcular;
      
    }
    numero9(){
      this.calcular=this.calcular+"9";
      this.texto=this.calcular;
      
    }
    numero0(){
      this.calcular=this.calcular+"0";
      this.texto=this.calcular;
      
    }
    Resta(){
      this.calcular=this.calcular+"-";
      this.texto=this.calcular;
      
    }
    Multiplicacion(){
      this.calcular=this.calcular+"*";
      this.texto=this.calcular;
      
    }
  
    Division(){
      this.calcular=this.calcular+"/";
      this.texto=this.calcular;
      
    }
  
  
    Suma(){
      this.calcular=this.calcular+"+";
      this.texto=this.calcular;
      
    }
    Resultado(){
      try {
        var parser = new Parser();
        var expr = parser.parse(this.calcular);
        this.texto=expr.evaluate({});
      
        
      } catch (error) {
        alert("Error en la operacion");
      }
      
      
  
    }
    Limpiar(){
      this.calcular="";
      this.texto=this.calcular;
    }
    BorrarUNO(){
      this.calcular=this.calcular.slice(0,-1);
      this.texto=this.calcular;
    }
  
}

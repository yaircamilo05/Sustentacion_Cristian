import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RutaNoEncontradaComponent } from './ruta-no-encontrada/ruta-no-encontrada.component';
import { PruebaComponent } from './prueba/prueba.component';
import { SustentationComponent } from './sustentation/sustentation.component';

const routes: Routes = [
  {
    path: "",
    component: PruebaComponent
  },
{
    path: "prueba",
    component: PruebaComponent
},
{
  path :"ruta-no-encontrada",
  component: RutaNoEncontradaComponent
},
{path: "sustentacion",component:SustentationComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

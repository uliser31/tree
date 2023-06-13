//https://fbellod.medium.com/como-integrar-el-framework-bootstrap-en-un-proyecto-angular-a5d53fa79e03
// como usr scss en angular
//https://www.youtube.com/watch?v=TS3amnLj9-U

// Breakpoint prefijo de clase sm md lg xl xxl para cambiar la distribucion de la maquetacion
// Container-sm md lg xl xxl

// Reducer 
// accion: {type, payload} indica que hay que hacer
// reducer: funcion (oldstate, accion) retorna un nuevo estado
// state: 
// store :

//pruba


import { Component } from '@angular/core';
import { Product } from './product.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products : Product[];

  constructor(){
    this.products = [
      new Product('Mercado',[
      new Product('Productos',[
        new Product (
          'Frutas',
           [
            new Product('Mango',
              [
                new Product('Mamey'),
                new Product('Moro'),
                new Product('Pinna') 
              ]
            ),
            new Product('Guayaba',
            [
              new Product('delPeru'),
              new Product('Roja'),
              new Product('Blanca') 
            ]
          )
          ]
          ),
        new Product (
         'Hortalizas',
           [
          new Product('Calabaza'),
          new Product('Berenjena')
        ]
        ),
        new Product (
        'Viandas',
        [
         new Product('Yuca'),
         new Product('Boniato')
       ]
     )]
    )]  
    )]
  }
}

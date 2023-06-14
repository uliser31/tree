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


import { Component, OnInit } from '@angular/core';
import { Product } from './product.models';
import { Store } from '@ngrx/store';
import { loadProducts,loadedProducts,  } from './product.actions';
import { Observable } from 'rxjs';
import { selectLoading, selectListProduct } from './product.selector';
import { AppState } from './app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  loading$: Observable<boolean> = new Observable();
  product$: Observable<Product[]> = new Observable();
  
  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);
    this.product$ = this.store.select(selectListProduct);
    this.store.dispatch(loadProducts());
    this.store.dispatch(loadedProducts());
    console.log(this.loading$)
    
  }
  /*products : Product[];

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
  }*/
} 

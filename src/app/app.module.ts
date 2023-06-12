import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BranchComponent } from './branch/branch.component';
import { HoverDirective } from './hover.directive';
import { ExpandComponent } from './expand/expand.component';
import { ContractComponent } from './contract/contract.component';
import { SheetComponent } from './sheet/sheet.component';

//import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
//import { productReducer } from './product.reducer';
import { Product } from './product.models';
@NgModule({
  declarations: [
    AppComponent,
    BranchComponent,
    HoverDirective,
    ExpandComponent,
    ContractComponent,
    SheetComponent
  ],
  imports: [
    BrowserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

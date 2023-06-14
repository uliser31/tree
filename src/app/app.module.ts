import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BranchComponent } from './branch/branch.component';
import { HoverDirective } from './hover.directive';
import { ExpandComponent } from './expand/expand.component';
import { ContractComponent } from './contract/contract.component';
import { SheetComponent } from './sheet/sheet.component';

//import { StoreModule } from '@ngrx/store';

//import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
//import { productReducer } from './product.reducer';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCER } from './app.state';
import { TreeComponent } from './tree/tree.component';
@NgModule({
  declarations: [
    AppComponent,
    BranchComponent,
    HoverDirective,
    ExpandComponent,
    ContractComponent,
    SheetComponent,
    TreeComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(ROOT_REDUCER, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { ClothingCompComponent } from './clothing-comp/clothing-comp.component';
import { FlowerCompComponent } from './flower-comp/flower-comp.component';
import { MobileCompComponent } from './mobile-comp/mobile-comp.component';
import { ShopProductComponent } from './shop-product.component';
import { ToysCompComponent } from './toys-comp/toys-comp.component';

import { CommonModule } from '@angular/common';
import { SharedModuleModule } from '../models/shared-module.module';
import { ShopRoutingRoutingModule } from './shop-routing-routing.module';

@NgModule({
  declarations: [
    ShopProductComponent,
    FlowerCompComponent,
    MobileCompComponent,
    ClothingCompComponent,
    ToysCompComponent,
  ],
    imports:[
      CommonModule,
      ShopRoutingRoutingModule,
      SharedModuleModule],
    exports:[
      SharedModuleModule]
})
export class ShoppingModuleModule { }

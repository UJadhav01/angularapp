import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClothingCompComponent } from './clothing-comp/clothing-comp.component';
import { FlowerCompComponent } from './flower-comp/flower-comp.component';
import { MobileCompComponent } from './mobile-comp/mobile-comp.component';
import { ShopProductComponent } from './shop-product.component';
import { ToysCompComponent } from './toys-comp/toys-comp.component';



const routes:Routes=[
  {path:'',component:ShopProductComponent,
  children:[
  {path:'clothing-comp',component:ClothingCompComponent},
  {path:'flower-comp',component:FlowerCompComponent},
  {path:'mobile-comp',component:MobileCompComponent},
  {path:'toys-comp',component:ToysCompComponent},
]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingRoutingModule { }

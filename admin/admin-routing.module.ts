import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { TrackComponent } from './track/track.component';
import { ProductComponent } from './product/product.component'; 
import { UpdateComponent } from './product/update/update.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  // {path:"main",component:MainComponent}
  {path:"track",component:TrackComponent},
  {path:"product",component:ProductComponent},
  {path:"update/:id",component:UpdateComponent},
  {path:"contacts",component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

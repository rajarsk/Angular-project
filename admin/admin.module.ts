import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../materials/material/material.module';
import { MainComponent } from './main/main.component';
import { TrackComponent } from './track/track.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { UpdateComponent } from './product/update/update.component';
import { ContactComponent } from './contact/contact.component'; 


@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    TrackComponent,
    ProductComponent,
    UpdateComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }

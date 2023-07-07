import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { ExploreComponent } from './explore/explore.component';
import { DetailsComponent } from './explore/details/details.component';
import { SuggestionsComponent } from './explore/details/suggestions/suggestions.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FourmComponent } from './fourm/fourm.component';

const routes: Routes =
[
  { path: '', component: HomeComponent },
  // { path: " ",component: MainComponent },
  { path: "explore", component: ExploreComponent },
  { path: "details/:id", component: DetailsComponent},
  { path: "suggestions/:id", component: SuggestionsComponent },
  {path:"contactus",component:ContactusComponent},
  {path:"fourm",component:FourmComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

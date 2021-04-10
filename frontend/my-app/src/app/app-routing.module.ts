import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebscrapComponentComponent } from '../app/webscrap-component/webscrap-component.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

// pages
const routes: Routes = [
  { path: 'WebScrap', component: WebscrapComponentComponent},
  { path: '', component: SearchbarComponent} 
] 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [WebscrapComponentComponent, SearchbarComponent]

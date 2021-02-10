import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsComponent } from './pages/cards/cards.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { BlocksComponent } from './pages/blocks/blocks.component';
import { FormsComponent } from './pages/forms/forms.component';


const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'cards', component: CardsComponent},
  { path: 'pricing', component: PricingComponent},
  { path: 'blocks', component: BlocksComponent},
  { path: 'forms', component: FormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

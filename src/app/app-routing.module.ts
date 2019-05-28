import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ScopriComponent } from './scopri/scopri.component';
import { MappaComponent } from './mappa/mappa.component';
import { LuoghiComponent } from './luoghi/luoghi.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mappa', component: MappaComponent },
  { path: 'scopri', component: ScopriComponent },
  { path: 'luoghi', component: LuoghiComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

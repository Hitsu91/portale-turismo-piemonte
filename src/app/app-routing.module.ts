import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LuoghiComponent } from './luoghi/luoghi.component';
import { MappaLeafletComponent } from './mappa-leaflet/mappa-leaflet.component';
import { MappaComponent } from './mappa/mappa.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ScopriComponent } from './scopri/scopri.component';
import { ContattaciComponent } from './contattaci/contattaci.component';
import { LuogoComponent } from './luoghi/luogo/luogo.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'mappa', component: MappaLeafletComponent },
  { path: 'scopri', component: ScopriComponent },
  { path: 'luoghi', component: LuoghiComponent },
  { path: 'luoghi/:luogo', component: LuogoComponent },
  { path: 'contattaci', component: ContattaciComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

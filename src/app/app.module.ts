import { AgmCoreModule } from '@agm/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AgmDirectionModule } from 'agm-direction';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContattaciComponent } from './contattaci/contattaci.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { ConsigliComponent } from './home/consigli/consigli.component';
import { EventiComponent } from './home/eventi/eventi.component';
import { HomeComponent } from './home/home.component';
import { LuoghiSettimanaComponent } from './home/luoghi-settimana/luoghi-settimana.component';
import { PiemonteDaScoprireComponent } from './home/piemonte-da-scoprire/piemonte-da-scoprire.component';
import { LuoghiComponent } from './luoghi/luoghi.component';
import { LuoghiService } from './luoghi/luoghi.service';
import { LuogoComponent } from './luoghi/luogo/luogo.component';
import { MappaLeafletComponent } from './mappa-leaflet/mappa-leaflet.component';
import { MappaComponent } from './mappa/mappa.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TruncateNewsPipe } from './pipes/truncate-news.pipe';
import { ScopriComponent } from './scopri/scopri.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MappaComponent,
    PageNotFoundComponent,
    ScopriComponent,
    CarouselComponent,
    EventiComponent,
    LuoghiSettimanaComponent,
    PiemonteDaScoprireComponent,
    ConsigliComponent,
    TruncateNewsPipe,
    LuoghiComponent,
    MappaLeafletComponent,
    ContattaciComponent,
    LuogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDZ4UHeac7QP-7p_oJVr2qpIgkbRDG0gt4'
    }),
    AgmDirectionModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [LuoghiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

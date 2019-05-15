import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { NavbarModule } from './modules/navbar/navbar.module';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { EmptyListModule } from './modules/empty-list/empty-list.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { WinnersModule } from './modules/winners/winners.module';
import { CarouselPicturesComponent } from './app/common/components/carousel-pictures/carousel-pictures.component';
import { CarouselPictureComponent } from './modules/components/carousel-picture/carousel-picture.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselPicturesComponent,
    CarouselPictureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastModule,
    NavbarModule,
    EmptyListModule,
    MatProgressBarModule,
    WinnersModule,
  ],
  providers: [MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

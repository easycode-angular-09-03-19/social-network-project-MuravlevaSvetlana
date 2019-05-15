import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WinnersRoutingModule } from './winners-routing.module';
import { WinnersComponent } from './pages/winners/winners.component';
import { WinersListComponent } from './components/winers-list/winers-list.component';
import { WinersItemComponent } from './components/winers-item/winers-item.component';
import { DirectivesModule } from '../../common/directives/directives.module';
import { CarouselPictureComponent } from './components/carousel-picture/carousel-picture.component';


@NgModule({
  declarations: [
    WinnersComponent,
    WinersListComponent,
    WinersItemComponent,
    CarouselPictureComponent
  ],
  imports: [
    CommonModule,
    WinnersRoutingModule,
    DirectivesModule
  ]
})
export class WinnersModule { }

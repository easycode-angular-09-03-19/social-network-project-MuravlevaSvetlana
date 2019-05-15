import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsFeedComponent } from './pages/news-feed/news-feed.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { PictureListComponent } from './components/picture-list/picture-list.component';
import { PictureItemComponent } from './components/picture-item/picture-item.component';
import { DirectivesModule } from '../../common/directives/directives.module';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { CarouselPictureComponent } from './components/carousel-picture/carousel-picture.component';

@NgModule({
  declarations: [
    NewsFeedComponent,
    NewsItemComponent,
    NewsListComponent,
    PictureListComponent,
    PictureItemComponent,
    CarouselPictureComponent,
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    DirectivesModule,
    ScrollDispatchModule
  ]
})
export class NewsModule { }

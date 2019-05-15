import { 
    Directive, 
    OnInit,
    Input,
    TemplateRef,
    ViewContainerRef
  } from '@angular/core';
import { GlobalPictureService } from '@services/global-picture.service';
import { PictureInfo } from '../interfaces/global-interfaces';
import { CarouselContext } from '../interfaces/global-interfaces';

@Directive({
  selector: '[appCarousel]',
})
export class CarouselDirective implements OnInit {
  context: CarouselContext | null = null;
  index = 0;
  img: PictureInfo;
  constructor(
    private tpl: TemplateRef<CarouselContext>,
    private vcr: ViewContainerRef,
    private pictureService: GlobalPictureService,
  ) {}

  @Input('appCarouselFrom') images: string[];
    
  ngOnInit(): void {
    this.pictureService.getPictureInfo(this.images[0]).subscribe((res: PictureInfo) => {
      this.img = res;
      this.context = {
        $implicit: this.img.url,
        info: {
          ownerName : this.img.owner.full_name,
          likes: this.img.likes.length,
          views: this.img.views.length
        },
        controller: {
          next: () => this.next(),
          prev: () => this.prev()
        }
      };
      this.vcr.createEmbeddedView(this.tpl, this.context);
    });
  }

  next() {
    this.index++;
    if (this.index >= this.images.length) {
      this.index = 0;
    }
    this.pictureService.getPictureInfo(this.images[this.index]).subscribe((res: PictureInfo) => {
      this.img = res;
      this.context = {
        $implicit: this.img.url,
        info: {
          ownerName : this.img.owner.full_name,
          likes: this.img.likes.length,
          views: this.img.views.length
        },
        controller: {
          next: () => this.next(),
          prev: () => this.prev()
        }
      };
      this.vcr.createEmbeddedView(this.tpl, this.context);
    });
  }

  prev() {
    this.index--;
    if (this.index < 0) {
      this.index = this.images.length - 1;
    }
    this.pictureService.getPictureInfo(this.images[this.index]).subscribe((res: PictureInfo) => {
      this.img = res;
      this.context = {
        $implicit: this.img.url,
        info: {
          ownerName : this.img.owner.full_name,
          likes: this.img.likes.length,
          views: this.img.views.length
        },
        controller: {
          next: () => this.next(),
          prev: () => this.prev()
        }
      };
      this.vcr.createEmbeddedView(this.tpl, this.context);
    });
  }
}
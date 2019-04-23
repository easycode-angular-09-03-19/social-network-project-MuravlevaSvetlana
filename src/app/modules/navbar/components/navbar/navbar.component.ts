import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivationEnd, Router} from '@angular/router';
import { filter } from 'rxjs/operators';
import {CurrentUserStoreService} from "app/common/services/current-user-store.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isHidden = true;
  notifIsHidden = true;
  userAvatar;
  userId;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private currentUser: CurrentUserStoreService
  ) { }

  ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof ActivationEnd)
    )
      .subscribe((event) => {
        this.activatedRoute.firstChild.data.subscribe((value) => {
          this.isHidden = !!value.withoutHeader;
        });
      });
    
  this.currentUser.userWatcher.subscribe(({ avatar, _id }) => {
    if (_id) {
      this.userAvatar = avatar;
      this.userId = _id;
    }
  });
  }

  showNotification() {
    this.notifIsHidden = !this.notifIsHidden;
  }
}

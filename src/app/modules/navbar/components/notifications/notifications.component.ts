import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  public notifications: {};
  constructor(
    private navbarService: NavbarService,
  ) { }

  ngOnInit() {
    this.navbarService.getNotifications().subscribe((res) => {
      this.notifications = res;
  }, (err) => {
    console.log(err);
    });
  }
}

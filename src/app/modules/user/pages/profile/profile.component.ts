import { Component, OnInit } from '@angular/core';
import {GlobalAuthService} from "../../../../common/services/global-auth.service";
import {UserService} from "../../../../common/services/user.service";
import {ActivatedRoute} from "@angular/router";
import { User } from '../../interfaces/user-intarface';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  authUserId: string;
  id: string;
  activeTab = 'selfies';
  constructor(
    private globalAuth: GlobalAuthService,
    private userService: UserService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.authUserId = this.globalAuth.userId;
    this.getUser();
  }
  getUser() {
    this.userService.getUserById(this.id).subscribe((user: User) => {
      if (user._id) {
        this.user = user;
        console.log(this.user);
      }
    });
  }
  uploadCover(cover) {
    this.userService.uploadCover(cover).subscribe((res) => {
      if (!res.error) {
        this.getUser();
      }
    });
  }
}

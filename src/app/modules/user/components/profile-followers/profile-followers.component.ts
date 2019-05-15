import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Followers } from '../../interfaces/user-intarface';
import { UserService } from '@services/user.service';
import { zip } from 'rxjs';
import { MessageService } from 'primeng/api';
import { GlobalAuthService } from '@services/global-auth.service';


@Component({
  selector: 'app-profile-followers',
  templateUrl: './profile-followers.component.html',
  styleUrls: ['./profile-followers.component.css']
})
export class ProfileFollowersComponent implements OnInit {
  id: string;
  authId: string;
  followers: Followers;
  followings: Array<string> = [];
  authFollowings: Array<string> = [];
  authUserId: string;
  @Output() chooseUser = new EventEmitter<string>();
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private messageService: MessageService,
    private authService: GlobalAuthService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.authId = this.authService.userId;
    if (this.id === this.authId) {
      this.getAuthFollowers();
    } else {
      this.getFollowers();
    }
  }

  getAuthFollowers(): void {
    zip(
      this.userService.uploadFollowers(this.id),
      this.userService.uploadFollowings(this.id)
    )
      .subscribe(([res, resp]: any) => {
        this.followers = res;
        resp.users.forEach(element => {
          this.followings.push(element._id);
        });
        this.followers.users.forEach(element => {
            element._buttonText = this.followings.some(i => i === element._id) ? 'following' : 'follow';
        });
      }), (err) => {
        this.messageService.add({severity: 'error', summary: 'Service Message', detail: 'Via MessageService'});
        console.log(err);
      };
  }

  getFollowers(): void {
    zip (
      this.userService.uploadFollowers(this.id),
      this.userService.uploadFollowings(this.authId)
    )
      .subscribe(([res, resp]: any) => {
        this.followers = res;
        resp.users.forEach(el => {
          this.authFollowings.push(el._id);
        });
          this.followers.users.forEach(item => {
            item._buttonText = this.authFollowings.some(i => i === item._id) ? 'following' : 'follow';
          });
      }), (err) => {
        this.messageService.add({severity: 'error', summary: 'Service Message', detail: 'Via MessageService'});
        console.log(err);
      };
  }

  clickUser(id: string): void {
    this.chooseUser.emit(id);
  }

  pressButton(id: string): void {
    this.userService.FollowUser(id).subscribe((res) => {
      this.getFollowers();
    }), (err) => {
      this.messageService.add({severity: 'error', summary: 'Service Message', detail: 'Via MessageService'});
      console.log(err);
    };
  }
}



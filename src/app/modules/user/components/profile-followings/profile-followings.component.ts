import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Followers } from '../../interfaces/user-intarface';
import { UserService } from '@services/user.service';
import { MessageService } from 'primeng/api';
import { GlobalAuthService } from '@services/global-auth.service';
import { zip } from 'rxjs';

@Component({
  selector: 'app-profile-followings',
  templateUrl: './profile-followings.component.html',
  styleUrls: ['./profile-followings.component.css']
})
export class ProfileFollowingsComponent implements OnInit {
  id: string;
  authId: string;
  followings: Followers;
  authFollowings: Array<string> = [];
  authUserId: string;
  @Output() chooseUser = new EventEmitter<string>();
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private messageService: MessageService,
    private globalAuth: GlobalAuthService,
  ) { }

  ngOnInit() {
    this.authId = this.globalAuth.userId;
    this.id = this.route.snapshot.params.id;
    
    if (this.id === this.authId) {
      this.getAuthFollowings();
    } else {
      this.getFollowings();
    }
  }

  getFollowings(): void {
    zip (
      this.userService.uploadFollowings(this.id),
      this.userService.uploadFollowings(this.authId)
    )
      .subscribe(([res, resp]: any) => {
        this.followings = res;
        resp.users.forEach(el => {
          this.authFollowings.push(el._id);
        });
          this.followings.users.forEach(item => {
            item._buttonText = this.authFollowings.some(i => i === item._id) ? 'following' : 'follow';
          });
      }), (err) => {
        this.messageService.add({severity: 'error', summary: 'Service Message', detail: 'Via MessageService'});
        console.log(err);
      };
  }

  getAuthFollowings() {
    return this.userService.uploadFollowings(this.authId).subscribe((res: Followers) => {
      this.followings = res;
      this.followings.users.forEach((element) => {
        element._buttonText = 'following';
      });
    }), (err: any): void => {
      this.messageService.add({severity: 'error', summary: 'Service Message', detail: 'Via MessageService'});
      console.log(err);
    };
  }

  clickUser(id: string): void {
    this.chooseUser.emit(id);
  }

  pressButton(id: string): void {
    this.userService.FollowUser(id).subscribe((res) => {
      this.getFollowings();
    }), (err: any): void => {
      this.messageService.add({severity: 'error', summary: 'Service Message', detail: 'Via MessageService'});
      console.log(err);
    };
  }

}



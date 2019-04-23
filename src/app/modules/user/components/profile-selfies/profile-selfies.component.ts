import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/common/services/user.service';
import { UploadSelfies } from '../../interfaces/user-intarface';


@Component({
  selector: 'app-profile-selfies',
  templateUrl: './profile-selfies.component.html',
  styleUrls: ['./profile-selfies.component.css']
})
export class ProfileSelfiesComponent implements OnInit {
  images;// интерфейс каюсь не успеваю написать, к следующему дз напишу на images
  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.uploadSelfies().subscribe((res: UploadSelfies) => {
      this.images = res.images;
    })
  }

}

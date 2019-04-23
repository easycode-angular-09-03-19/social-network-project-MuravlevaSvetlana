import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../interfaces/user-intarface';

@Component({
  selector: 'app-profile-controls',
  templateUrl: './profile-controls.component.html',
  styleUrls: ['./profile-controls.component.css']
})
export class ProfileControlsComponent implements OnInit {
  @Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}

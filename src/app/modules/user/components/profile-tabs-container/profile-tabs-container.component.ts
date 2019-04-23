import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../interfaces/user-intarface';

@Component({
  selector: 'app-profile-tabs-container',
  templateUrl: './profile-tabs-container.component.html',
  styleUrls: ['./profile-tabs-container.component.css']
})
export class ProfileTabsContainerComponent implements OnInit {
  @Input() activeTab: string;
  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}

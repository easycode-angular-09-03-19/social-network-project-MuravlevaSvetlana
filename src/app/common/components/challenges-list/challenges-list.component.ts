import { Component, OnInit, Input } from '@angular/core';
import { Challenge } from 'app/common/global-interfaces/global-interface';

@Component({
  selector: 'app-challenges-list',
  templateUrl: './challenges-list.component.html',
  styleUrls: ['./challenges-list.component.css']
})
export class ChallengesListComponent implements OnInit {
  @Input() challenges: [Challenge];

  constructor() { }

  ngOnInit() {
  }

}

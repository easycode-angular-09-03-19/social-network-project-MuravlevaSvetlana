import { Component, Input, OnInit } from '@angular/core';
import { Challenge } from 'app/common/global-interfaces/global-interface'; 

@Component({
  selector: 'app-challenge-card',
  templateUrl: './challenge-card.component.html',
  styleUrls: ['./challenge-card.component.css']
})
export class ChallengeCardComponent implements OnInit {
  @Input() challenge: [Challenge];
  constructor() { }

  ngOnInit() {
  }

}

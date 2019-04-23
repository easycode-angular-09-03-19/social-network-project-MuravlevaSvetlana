import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {CurrentUserStoreService} from "./common/services/current-user-store.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'lesson7';
  constructor(
    private messageService: MessageService,
    private currentUser: CurrentUserStoreService,
  ) {}
  ngOnInit(): void {
    this.currentUser.initCurrentUser();
  }
  
  onClick() {
    this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Via MessageService'});
  }
}
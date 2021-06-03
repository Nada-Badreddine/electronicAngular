import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../models/User.model';


import { UserService } from '../services/UserService';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list-component.component.html',
  styleUrls: ['./user-list-component.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  users: User[];
  userSubscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userSubscription = this.userService.userSubject.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
    this.userService.emitUsers();
  }



  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
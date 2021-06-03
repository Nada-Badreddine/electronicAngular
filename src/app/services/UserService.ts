import { User } from '../models/User.model';
import {Subject} from 'rxjs';



export class UserService {
  private users: User[] = [
      {
          firstName: 'Nada',
          lastName: 'badreddine',
          email:'nada@gmail.com',
          drinkPreference: 'Coca',
          hobbies: [
              'coder',
              'degster'
          ]
      }
  ];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
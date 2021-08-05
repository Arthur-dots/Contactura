import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private dataEdit = new BehaviorSubject<User>(null);
  botaoEdit = this.dataEdit.asObservable();

  constructor() { }

  getUserList(users: User){
    this.dataEdit.next(users);
  }
}

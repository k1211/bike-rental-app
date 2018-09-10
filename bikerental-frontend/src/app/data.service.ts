import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  isLogged = new BehaviorSubject(false);

  private isAdminStatus = new BehaviorSubject(false);
  currentIsAdminStatus = this.isAdminStatus.asObservable();

  private userID = new BehaviorSubject(1);
  currentUserID = this.userID.asObservable();

  constructor() {
  }

  checkIfIsAdmin(isAdmin: boolean) {
    this.isAdminStatus.next(isAdmin);
  }

  checkCurrentUserID(id: number) {
    this.userID.next(id);
  }
}

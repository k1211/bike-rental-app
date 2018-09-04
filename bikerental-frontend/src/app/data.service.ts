import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private isAdminStatus = new BehaviorSubject(true);
  currentIsAdminStatus = this.isAdminStatus.asObservable();

  constructor() { }

   checkIfIsAdmin(isAdmin: boolean) {
    this.isAdminStatus.next(isAdmin);
  }
}

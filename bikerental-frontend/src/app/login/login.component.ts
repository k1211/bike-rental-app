import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {LoginService} from "../login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUser = {username: '', password: ''};

  constructor(
    private dataService: DataService,
    private loginService: LoginService
  ) {
  }

  ngOnInit() {
  }

  onSubmit() {
    let token;
    this.loginService.login(this.loginUser)
      .subscribe(() => {
        console.log('zalogowano');
      });
  }

}

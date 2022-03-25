import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../services/user.service';
import { GeneralService } from '../services/general-service.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public user = {
    username: '',
    password: '',
    email: ''
  };
  constructor(private userService: UserService, public generalService: GeneralService, private router: Router,) { }

  ngOnInit() {
  }
  redirect(url) {
    this.router.navigateByUrl(url);
  }

  public async registerUser() {
    const query: any = await this.userService.createUser(this.user);
    console.log(query);
    if(query && query.ok) {
      const alert = await this.generalService.presentAlert('Success', '', 'User created successfully');
      this.redirect('/');
    } else {
      await this.generalService.presentAlert('Error', '', 'User not created');
    }
  }
}

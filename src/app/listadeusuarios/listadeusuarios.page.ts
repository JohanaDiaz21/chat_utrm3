import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { UserService } from '../services/user.service';
import { SocketServiceService } from '../services/socket-service.service';



@Component({
  selector: 'app-listadeusuarios',
  templateUrl: './listadeusuarios.page.html',
  styleUrls: ['./listadeusuarios.page.scss'],
})
export class ListadeusuariosPage implements OnInit {
  public onlineUsers = [];
  public userId: any;

  constructor(
    private socketService: SocketServiceService,
    private route: ActivatedRoute,
    private service: UserService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.userId = this.service.getId();
    console.log('user in tab', this.userId);
    this.socketService.getOnlineUsers().subscribe((users) => {
      console.log('users connected', users);
      if (users) {
        this.onlineUsers = users;
      }
    });
  }

  async navigateToChat(id) {
    await this.router.navigate(['/home/tab2'], {queryParams: {userId: id}});

  }

  hola() {
    console.log('hola');
  }

}

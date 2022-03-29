import { Component , OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {  UserService } from '../services/user.service';
import {SocketServiceService} from '../services/socket-service.service';

@Component({
  selector: 'app-chat',
  templateUrl: 'chat.page.html',
  styleUrls: ['chat.page.scss']
})
export class ChatPage implements OnInit {

  public messageList = [];
  public chatMessage: string = '';
  public selectedUserId: any;
  public myUserId: any;
  public conversationUuid: string;

  constructor(private route: ActivatedRoute, private service: UserService, private socketService: SocketServiceService) {
    console.log(this.messageList);
  }
  async ngOnInit() {
    console.log('init tab');
    const user = this.route.snapshot.queryParams;
    if (user && user.userId) {
      this.selectedUserId = parseInt(user.userId, 10);
      this.myUserId  = parseInt(this.service.getId(), 10);

      const payload = {
        sender: this.myUserId,
        receiver: this.selectedUserId
      };

      const query: any = await this.service.loadConversation(payload);

      if(query) {
        this.conversationUuid = query.uuid;
        this.messageList = query.data;
      }
      console.log(query);
    }
    this.socketService.getNewMessage().subscribe((message) => {
      console.log('Mensaje recibido', message);
      if(message) {
        this.messageList.push(message);
      }
    });
    console.log('init tab', user);
  }
  async sendMessage() {
    console.log(this.chatMessage);
    const payload = {
      user_id: this.myUserId,
      conversation_uuid: this.conversationUuid,
      msg: this.chatMessage
    };

    const query: any = await this.service.saveMessage(payload);

    if(query) {
      this.messageList.push(query.data);
      this.socketService.sendMessage({
        id: query.data.id,
        uuid: this.conversationUuid,
        from_id: this.myUserId,
        to_id: this.selectedUserId
      });
    }

    console.log(query);
    this.chatMessage = '';
    return true;
  }
}

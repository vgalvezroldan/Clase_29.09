import { Component } from '@angular/core';
import { MessageService } from '../message.service'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public inputMessage: string = '';

  constructor(private messageService: MessageService) {}

  enviarMensaje() {
    this.messageService.setMessage(this.inputMessage);
  }

  borrarMensaje() {
    this.messageService.clearMessage();
    this.inputMessage = '';
  }

  get displayMessage(): string {
    return this.messageService.getMessage();
  }
}


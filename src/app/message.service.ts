import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private message: string = '';

  setMessage(value: string) {
    this.message = value;
  }

  getMessage(): string {
    return this.message;
  }

  clearMessage() {
    this.message = '';
  }
}


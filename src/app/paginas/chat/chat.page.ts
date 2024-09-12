import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: 'chat.page.html',
  styleUrls: ['chat.page.scss'],
})
export class ChatPage {
  messages = [
    { sender: 'Usuario1', text: 'Hola!', avatar: '/assets/ImagenesPerro/perro-1.jpg' }, // Imagen de avatar Usuario1
    { sender: 'Usuario1', text: '¿Cómo estás?', avatar: '/assets/ImagenesPerro/perro-1.jpg' },
  ];
  newMessage: string = '';

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({
        sender: 'Tú',
        text: this.newMessage,
        avatar: '/assets/ImagenesPerro/boxer.jpg' // Imagen de avatar de usuario
      });
      this.newMessage = '';
    }
  }
}

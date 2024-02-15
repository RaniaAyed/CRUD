import { Component } from '@angular/core';
import { SocketService } from './socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  constructor(private socketService: SocketService) {}
  title = 'frontend';

  ngOnInit() {
    // Écoute de l'événement 'message' sur le socket
    this.socketService.listen('message').subscribe((data: any) => {
      console.log('Message reçu du serveur socket:', data);
    });

    // Émission de l'événement 'new-message' avec des données
    this.socketService.emit('new-message', { content: 'Hello world!' });
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';


@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: any;

  constructor() {
    this.socket = io('http://localhost:3000'); // Remplacez avec l'URL de votre serveur socket
  }

  listen(event: string): Observable<any> {
    return new Observable((subscriber) => {
      this.socket.on(event, (data: any) => {
        subscriber.next(data);
      });
    });
  }

  // Méthode pour émettre un événement sur le socket
  emit(event: string, data: any) {
    this.socket.emit(event, data);
  }
  // Ajoutez ici des méthodes pour émettre et écouter des événements sur le socket
}

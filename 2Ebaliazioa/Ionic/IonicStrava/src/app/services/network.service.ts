import { Injectable } from '@angular/core';
import { Network } from '@capacitor/network';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  connected = true;

  constructor() {
    Network.addListener('networkStatusChange', async status => {
      this.connected = status.connected;
    });
   }
   getStatus(): boolean {
    return this.connected;
  }
}
import { Component, OnInit } from '@angular/core';
import { Kluba } from '../classes/kluba';
import { ApiService } from '../services/api.service';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-kluba-gehitu',
  templateUrl: './kluba-gehitu.page.html',
  styleUrls: ['./kluba-gehitu.page.scss'],
})
export class KlubaGehituPage implements OnInit {

  constructor(private apiService: ApiService, private navCtrl: NavController) { }

  kluba = {} as Kluba;  
  errorMessage= '';
  gehituForm(): void {
    if (!this.kluba) { return; }
    try {
      this.apiService.addKluba(this.kluba);
      this.reset();
      //Hasierako orrira bueltatu
      this.navCtrl.navigateForward('tabs/tab1');
    } catch (error) {
      this.errorMessage = error as any;
    }
  }
  reset(): void {
    this.kluba = {
      id: 0,
      name: '',
      cover_photo_small: '',
      sport_type: '',
      private: false,
      member_count: 0,
      description: '',
      club_type: '',
      jarduerak: []
    };
  }

  ngOnInit() {
  }

}

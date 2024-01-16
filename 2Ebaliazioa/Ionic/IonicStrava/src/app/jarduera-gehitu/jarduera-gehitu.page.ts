import { Component, OnInit } from '@angular/core';
import { Kluba } from '../classes/kluba';
import { ApiService } from '../services/api.service';
import { Jarduera } from '../classes/jarduera';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-jarduera-gehitu',
  templateUrl: './jarduera-gehitu.page.html',
  styleUrls: ['./jarduera-gehitu.page.scss'],
})
export class JardueraGehituPage implements OnInit {

  constructor(private apiService: ApiService, private navCtrl: NavController) { }
  jarduera = {} as Jarduera
  errorMessage= '';
  gehituForm(): void {
    if (!this.jarduera) { return; }
    try {
      this.apiService.addJarduera(this.jarduera);
      this.reset();
      //Hasierako orrira bueltatu
      this.navCtrl.navigateForward('tabs/tab1');
    } catch (error) {
      this.errorMessage = error as any;
    }
  }
  
  reset(): void {
    this.jarduera = {
      id: 0,
      name: '',
      distance: 0,
      moving_time: 0,
      elapsed_time: 0,
      type: '',
      workout_type: 0,
      atleta_id: 0,
    };
  }

  ngOnInit() {
  }

}

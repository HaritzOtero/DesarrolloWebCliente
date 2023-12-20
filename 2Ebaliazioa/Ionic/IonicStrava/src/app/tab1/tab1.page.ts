import { Component, OnInit } from '@angular/core';
import { KlubaService} from '../services/kluba.service';
import { Kluba } from '../classes/kluba';
import { ApiService} from '../services/api.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  klubak: Kluba[] = [];
  showLoader=true;
  
  constructor(private apiService: ApiService) {}
  getKlubak(): void{
    this.apiService.dbState().subscribe((res) => {
      if(res){
        this.apiService.fetchKlubak().subscribe(
          data => {this.klubak = data;
          this.showLoader=false;}
        )
      }
    });
  }

  
  ngOnInit(){
    this.getKlubak();
  }
}

import { Component, OnInit } from '@angular/core';
import { KlubaService} from '../services/kluba.service';
import { ApiService} from '../services/api.service';
import { Kluba } from '../classes/kluba';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  klubak: Kluba[] = [];
  showLoader=true;
  //laravel rest apia
  //constructor(private klubaService: KlubaService) {}
  
  //sqlite
  constructor(private apiService: ApiService) {}

  /*
  getKlubak(): void{
    this.klubaService.getKlubak()
      .subscribe(data => {this.klubak = data; },
          error => console.log('Error::' + error)); }

  */
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

  deletekluba(id: any): void {
    this.apiService.deleteKluba(id)
      .then(() => {
        console.log(`Kluba con ID ${id} eliminado correctamente.`);
        // Puedes realizar acciones adicionales después de la eliminación si es necesario
        // Por ejemplo, recargar la lista de klubak
        this.apiService.getKlubak();
      })
      .catch(error => {
        console.error(`Error al eliminar kluba con ID ${id}:`, error);
        // Puedes manejar el error según tus necesidades
      });
  }
  

  ngOnInit(): void {
    this.getKlubak();
  }

  /*kluba = {
    id: 783189,
    name: 'uni eibar',
    cover_photo_small: 'assets/img/generikoa.jpg',
    sport_type: 'running',
    private: true,
    member_count: 3,
    description: 'Lanbide Heziketako Ikastetxea',
    club_type: 'company',
  };*/

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';
import { KlubaService } from '../services/kluba.service';
import { ApiService } from '../services/api.service';

import { Kluba } from '../classes/kluba';


@Component({
  selector: 'app-tab1-jarduerak',
  templateUrl: './tab1-jarduerak.page.html',
  styleUrls: ['./tab1-jarduerak.page.scss'],
})
export class Tab1JarduerakPage implements OnInit {
  kluba = {} as Kluba;
  constructor(private apiService: ApiService, private route: ActivatedRoute, private location: Location) { }

  //laravel api
  /*
  constructor(private klubaService: KlubaService, private route: ActivatedRoute, private location: Location) { }

  
  
  getKluba(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.klubaService.getKluba(id)
    .subscribe(kluba => {
    this.kluba = kluba;
    this.kluba.jarduerak.sort( (a, b): number => {
    return (b.moving_time - a.moving_time);
    });
    },
    error => console.log('Error :: ' + error));
   }
   goBack(): void {
    this.location.back();
   }
  */
   //sqlite
   getKluba(): void {
    this.apiService.dbState().subscribe((res) => {
      if(res){
            const id = Number(this.route.snapshot.paramMap.get('id'));
            this.apiService.fetchKluba(id).subscribe(kluba => {
              this.kluba = kluba;
              this.kluba.jarduerak.sort( (a, b): number => {
              return (b.moving_time - a.moving_time);
              });
            }
        )}
    });
   }

  ngOnInit() {
    this.getKluba();
  }

  eliminarJarduera(id: any): void {
    this.apiService.deleteJarduera(id)
      .then(() => {
        console.log(`Jarduera con ID ${id} eliminada correctamente.`);
        // Puedes realizar acciones adicionales después de la eliminación si es necesario
        // Por ejemplo, recargar la lista de klubak
        this.apiService.getKlubak();

      })
      .catch(error => {
        console.error(`Error al eliminar jarduera con ID ${id}:`, error);
        // Puedes manejar el error según tus necesidades
      });
  }
  

}

import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Kluba } from '../classes/kluba';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { SQLitePorter } from '@awesome-cordova-plugins/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Jarduera } from '../classes/jarduera';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private storage!: SQLiteObject;
  klubakList = new BehaviorSubject<Kluba[]>([]);
  JarduerakList = new BehaviorSubject<Jarduera[]>([]);
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private platform: Platform, 
    private sqlite: SQLite, 
    private httpClient: HttpClient,
    private sqlPorter: SQLitePorter,
  ) {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'Strava_db.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
          this.storage = db;
          this.getData();
      });
    });
  }
  //Datu basea listo dagoen jakiteko, tab1 orrian erabiltzen da
  dbState() {
    return this.isDbReady.asObservable();
  }
  // Render data
  getData() {
    //Lehen aldia bada, taula sortuko du datu batzuekin (sqlPorter erabiltzen du sql-tik datubasera pasatzeko). Gero konexioa badago sinkronizatu eta amaieran getKlubak() exekutatuko da.
    this.httpClient.get(
      'assets/dump.sql', 
      {responseType: 'text'}
    ).subscribe(data => {
      this.sqlPorter.importSqlToDb(this.storage, data)
        .then(_ => {
          this.getKlubak();
          this.isDbReady.next(true);
        })
        .catch(error => console.error(error));
    });
  }   
  // Kluben zerrenda prestatu, konstruktoreetik deitzen zaio
  async getKlubak(){
    try {
      const res = await this.storage.executeSql('SELECT * FROM klubas', []);
      let items: Kluba[] = [];
      console.log(res);
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {      
          //jarduerak lortzen dira -> getJarduerak(id)
          const jarduerak = await this.getJarduerak(res.rows.item(i).id);  
          items.push({ 
            id: res.rows.item(i).id,
            name: res.rows.item(i).name,  
            cover_photo_small: res.rows.item(i).cover_photo_small,
            sport_type: res.rows.item(i).sport_type,
            private: res.rows.item(i).private,
            member_count: res.rows.item(i).member_count,
            description: res.rows.item(i).description,
            club_type: res.rows.item(i).club_type,
            jarduerak: jarduerak
           });
        }
      }
      this.klubakList.next(items);
    } catch (error) {
      console.error ("errorea getKlubak", error);
    }
  }
   // Klub bateko jarduerak lortzeko
   async getJarduerak(id: any){
    try {
      const res = await this.storage.executeSql('SELECT j.id as id, j.name as name, j.distance as distance, j.moving_time as moving_time, j.elapsed_time as elapsed_time, j.type as type, j.workout_type as workout_type, j.atleta_id as atleta_id FROM jardueras as j, atletas as a WHERE j.atleta_id = a.id and a.kluba_id = ?', [id]);
      let items: Jarduera[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({ 
                id: res.rows.item(i).id,
                name: res.rows.item(i).name,
                distance: res.rows.item(i).distance,
                moving_time: res.rows.item(i).moving_time,
                elapsed_time: res.rows.item(i).elapsed_time,
                type: res.rows.item(i).type,
                workout_type: res.rows.item(i).workout_type,
                atleta_id: res.rows.item(i).atleta_id
          });
        }
        return items;
      }
    } catch (error) {
      console.error("errorea getJarduerak", error);
      return [];
    }
  }
  //getKlubak() sortutako zerrenda bueltatzen du, tab1 orrian erabiltzen da
  fetchKlubak(): Observable<Kluba[]> {
    return this.klubakList.asObservable();
  }

    //getKluba() lortutako datuak bueltatzen ditu, tab1-jarduerak orrian erabiltzen da
    fetchKluba(id: any): Observable<Kluba> {
      const kluba = this.klubakList.value.find(kluba => kluba.id === id);
      return of(kluba);
    }

    // Add - Lerro berria gehitu, transakzio taulara pasatu eta sinkronizatzen saiatu
  async addKluba(kluba: Kluba) {
    let data = [kluba.name, kluba.cover_photo_small, kluba.sport_type, kluba.private, kluba.member_count, kluba.description, kluba.club_type];
    alert(data);
    const res = await this.storage.executeSql('INSERT INTO klubas (name, cover_photo_small, sport_type, private, member_count, description, club_type) VALUES (?, ?, ?, ?, ?, ?, ?)', data);

    this.getKlubak();
  }
}
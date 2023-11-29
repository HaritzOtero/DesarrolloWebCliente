import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nire-osagaia',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nire-osagaia.component.html',
  styleUrl: './nire-osagaia.component.css'
})
export class NireOsagaiaComponent {
  langilea = {
    izena: 'Pepe',
    abizena: 'Perez',
    generoa: 'gizona',
    irudia: './assets/img/Vilma.jpg'
    };

    Title="Langileen zerrenda";
  getTitle() {
  return this.Title;
  }

  myText = "Nire izena: <h1>Haritz</h1> da";

  rowStart = 0;
  rowLimit = 2;
kenduRow() {
this.rowStart -= 2;
this.rowLimit -= 2;
}
gehituRow() {
this.rowStart += 2;
this.rowLimit += 2;
}

  langileak = [
    { izena: "Pepe", abizena: "Perez", generoa: "gizona", soldata: 1000, likes: 0, lanean: true, jaiotza: new Date('1990-05-15') },
    { izena: "Sara", abizena: "Ruiz", generoa: "emakumea", soldata: 1000, likes: 0, lanean: true, jaiotza: new Date('1985-09-22') },
    { izena: "Paul", abizena: "Elorza", generoa: "gizona", soldata: 1500, likes: 0, lanean: false, jaiotza: new Date('2001-03-10') },
    { izena: "Raul", abizena: "Txakartegi", generoa: "gizona", soldata: 2000, likes: 0, lanean: false, jaiotza: new Date('1978-11-05')}
    ];

    gehituLikes(langilea: any)
{ langilea.likes++; }
}


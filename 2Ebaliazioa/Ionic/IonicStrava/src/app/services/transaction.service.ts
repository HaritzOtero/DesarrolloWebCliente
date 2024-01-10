import { Injectable } from '@angular/core';
import { SQLitePorter } from '@awesome-cordova-plugins/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { Transaction } from '../classes/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private storage!: SQLiteObject;

  constructor(
    private platform: Platform, 
    private sqlite: SQLite,
    private sqlPorter: SQLitePorter,
  ) {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'Strava_db.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
          this.storage = db;
      });
    });
  }
  //Transakzio berria gehitzeko
  async addTransaction(transaction: Transaction) {
    //insert-a;
    const query = 'INSERT INTO pending_transactions (endpoint, method, payload) VALUES (?,?,?)';
    this.storage.executeSql(query, [transaction.endpoint, transaction.method, transaction.payload])
      .catch(error => console.error('Errorea transakzioa gehitzen', error));
  }
  //Dauden transakzio guztiak lortzeko
  async getPendingTransactions(): Promise<Transaction[]> {
    const query = 'SELECT * FROM pending_transactions';
    return this.storage.executeSql(query, [])
      .then(result => {
        const transactions: Transaction[] = [];
        for (let i = 0; i < result.rows.length; i++) {
          const row = result.rows.item(i);
          transactions.push({
            id: row.id,
            endpoint: row.endpoint,
            method: row.method,
            payload: row.payload,
            timestamp: row.timestamp
          });
        }
        return transactions;
      })
      .catch(error => {
        console.error('Errorea egiteke dauden transakzioak lortzen', error);
        return [];
      });
  }
  //Transakzio bat (id) ezabatzeko
  async removeTransaction(transaction: Transaction) {
    const query = 'DELETE FROM pending_transactions WHERE id = ?';
    this.storage.executeSql(query, [transaction.id])
      .catch(error => console.error('Errorea transakzio bat ezabatzen', error));
  }
  //Transakzio guztiak ezabatzeko
  async removeAllTransactions() {
    const query = 'DELETE FROM pending_transactions';
    this.storage.executeSql(query)
      .catch(error => console.error('Errorea transakzio guztiak ezabatzen', error));
  }
}
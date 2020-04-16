import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map, finalize } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FbService {

  constructor(private fbdb: AngularFireDatabase) { }

  getAll(dbname: string) {
    return this.fbdb.list('/' + dbname).valueChanges();
  }
}

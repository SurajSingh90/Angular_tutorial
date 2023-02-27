import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
  // providedIn: 'root'

export class BookserviceService {

  constructor() { }
  getbooks(){
    return [
      {
        name_book:"Mean developer for beginers",
        authors: "suraj singh",
        Rs:100
      },
      {
        name_book: "Mean developer for beginers",
        authors: "nirmal singh",
        Rs:100
      }
      ]
  }
}

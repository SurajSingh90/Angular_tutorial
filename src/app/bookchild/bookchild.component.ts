import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../service/cart.service';
import {Book} from '../types/Book'
@Component({
  selector: 'app-bookchild',
  templateUrl: './bookchild.component.html',
  styleUrls: ['./bookchild.component.css']
})
export class BookchildComponent {
  @Input() book:Book = {} as Book
  // @Output() emitBook = new EventEmitter<Book>()
  constructor(private cartservice: CartService){}
  iscart:boolean = false
  addtocart(){
  //  this.emitBook.emit(this.book)
   this.iscart = true

   this.cartservice.add(this.book)
  }
  removetocart(){
    this.iscart = false
    this.cartservice.remove(this.book)

  }
}

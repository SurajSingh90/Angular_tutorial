import { Component } from '@angular/core';
import {Book} from '../types/Book'
import { BookserviceService } from './bookservice.service';
// import {BookserviceService} from '../book/bookservice.service'
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  
    books: Book[] = []
    constructor(private bookservice: BookserviceService){
      // console.log({cons:"constructor calll"})
      this.books = this.bookservice.getbooks()
    }
    cart : Book[] = []

    // addtocart(book:Book){
    //   console.log(book)
     
    // }
    isdisable:boolean = false
    
    ngOnInit():void{
      console.log({ngoniti:'onitit'})
    }

  
  

  // eventwork(){
  //   alert('yaaa event worjing')
  //   this.isdisable = true
  // }
 
  // handleevent(event:any){
  //  this.myname = event.target.value 
  // //  return this.myname
  // }
  isshowing:boolean = false
  
}

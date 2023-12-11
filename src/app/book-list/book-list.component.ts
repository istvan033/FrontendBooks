import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books:any
  authors:any
oszlopok = [
  {key:"id", text:"Id"},
  {key:"name", text:"Név"}
]

  constructor(private base:BaseService){
    this.base.getBooks().subscribe(
      (res)=>this.books = res
    )

    this.base.getAuthors().subscribe(
      (res) => this.authors = res
    )
  }
}

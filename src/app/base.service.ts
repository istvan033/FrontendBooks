import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  booksSub = new Subject()
  authorsSub = new Subject()
  url = "https://localhost:7184/api/Authors"
  constructor(private http:HttpClient) { 
    this.loadBooks(),
    this.loadAuthors
  }

  loadBooks(){
    this.http.get(this.url).subscribe(
      (res)=>this.booksSub.next(res)
    )
  }

  getBooks()
    {return this.booksSub}

  postBook(body:any){
    this.http.post(this.url, body).subscribe(
      ()=>this.loadBooks()
    )
  }

  putBook(body:any){
    this.http.post(this.url+body.id, body).subscribe(
      ()=>this.loadBooks()
    )
  }

  deleteBook(body:any){
    this.http.delete(this.url+body.id).subscribe(()=> this.loadBooks())
  }

  loadAuthors(){
    this.http.get(this.url).subscribe(
      (res)=>this.booksSub.next(res)
    )
  }

  getAuthors()
    {return this.booksSub}

  postAuthor(body:any){
    this.http.post(this.url, body).subscribe(
      ()=>this.loadAuthors()
    )
  }

  putAuthor(body:any){
    this.http.post(this.url+body.id, body).subscribe(
      ()=>this.loadAuthors()
    )
  }

  deleteAuthor(body:any){
    this.http.delete(this.url+body.id).subscribe(()=> this.loadAuthors())
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post';
import { catchError } from 'rxjs/operators';
import{throwError} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {
 private apiUrl = 'http://127.0.0.1:8000/api';
 httpOptions={
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
 }
  constructor(private httpclient:HttpClient)  { }
  getall():Observable<Post[]>{
    return this.httpclient.get<Post[]>(this.apiUrl+'/posts/').pipe(
      catchError(this.errorHandler)
    )
  }
create(post:any):Observable<Post>{
return this.httpclient.post<Post>(this.apiUrl+'/posts/',JSON.stringify(post),this.httpOptions).pipe(
  catchError(this.errorHandler)
)
}
find(id:any):Observable<Post>{
  return this.httpclient.get<Post>(this.apiUrl+'/posts/'+id).pipe(
    catchError(this.errorHandler)
  )
}
update(id:any,post:any):Observable<Post>{

return this.httpclient.put<Post>(this.apiUrl+'/posts/'+id,JSON.stringify(post),this.httpOptions).pipe(

  catchError(this.errorHandler)
)
}

 delete(id:any):Observable<Post>{
   return this.httpclient.delete<Post>(this.apiUrl+'/posts/'+id).pipe(
     catchError(this.errorHandler)
   )
 }



 errorHandler(error: any){
let errorMessage = '';
if(error.error instanceof ErrorEvent){
  errorMessage = error.error.message;


 }else{
    errorMessage = `Error code: ${error.status}\nMessage: ${error.message}`;
 }
 return throwError(errorMessage);
}



}

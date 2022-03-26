import { Injectable } from "@angular/core"; 
import { ToDo } from "./todo";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable(
    {providedIn: 'root'}
)
export class TodoService {  

    constructor (
        private http : HttpClient
        
    ) {
    }
    salvar(todo :ToDo) : Observable<ToDo> {
      return this.http.post<ToDo>('http://localhost:8080/api/todos', todo)
    }
   
}
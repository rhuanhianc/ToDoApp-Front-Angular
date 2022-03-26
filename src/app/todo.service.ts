import { Injectable } from "@angular/core"; 
import { ToDo } from "./todo";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable(
    {providedIn: 'root'}
)
export class TodoService {  
private url: string = 'http://localhost:8080/api/todos';

    constructor (
        private http : HttpClient
        
    ) {
    }
    salvar(todo :ToDo) : Observable<ToDo> {
      return this.http.post<ToDo>(`${this.url}`, todo)
    }
    getAll() : Observable<ToDo[]> {
        return this.http.get<ToDo[]>(`${this.url}`)
        }

    delete(todo : ToDo) : Observable<ToDo> {
        const urlDelete = `${this.url}/${todo.id}`
        return this.http.delete<ToDo>(urlDelete)
        }
    done(todo : ToDo) : Observable<ToDo> {
        const urlFeito = `${this.url}/${todo.id}/feito`
        return this.http.patch<ToDo>(urlFeito, {})
        }
   
}
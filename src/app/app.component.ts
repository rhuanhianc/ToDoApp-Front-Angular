import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToDo } from './todo';
import { TodoService } from './todo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  todos : ToDo[] = []
  form: FormGroup = new FormGroup({
    descricao : new FormControl(''),
  });

  constructor( private service: TodoService) { 
  
  }

  ngOnInit() {
   this.listarTodos()
  }

  listarTodos() {
    this.service.getAll().subscribe(
      allTodos => this.todos = allTodos
    )
  }
  submit() {
    const todo : ToDo = {...this.form.value}
    this.service.salvar(todo)
    .subscribe(todoSalvo =>{
      this.todos.push(todoSalvo)
      this.form.reset()

    });
  }
  done(todo : ToDo) {
    this.service.done(todo)
    .subscribe(todoFeito => {
      todo.feito = true
      todo.feitoData = todoFeito.feitoData
    })
  }
  delete(todo : ToDo) {
    this.service.delete(todo)
    .subscribe({ next: () => {
          this.listarTodos()
        }
     }
    )
  }
}

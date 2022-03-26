import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToDo } from './todo';
import { TodoService } from './todo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  form: FormGroup = new FormGroup({
    descricao : new FormControl(''),
  });

  constructor( private service: TodoService) { 
  
  }

  submit() {
    console.log(this.form.value);
    const todo : ToDo = {...this.form.value}
    this.service.salvar(todo)
    .subscribe(todoSalvo => console.log(todo));
  }
}

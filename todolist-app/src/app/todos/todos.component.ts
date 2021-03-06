import { Component, OnInit} from '@angular/core';
import { TodosService } from '../todos.service';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  public loading: boolean = true;
  public filters: string = '';

  constructor(public todosService: TodosService) {

   }

  ngOnInit(): void {
    this.todosService
      .fetchTasks()
      .pipe(delay(3000))
      .subscribe(() => {
        this.loading = false;
      })
  }

  onChange(id: number): void {
    this.todosService.onToggle(id);
  }

  delTask(id: number): void {
    this.todosService.removeTask(id);
  }

}

import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos!: Todo[];

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        title: 'Call two hippies beach house',
        completed: false,
      },
      {
        id: 1,
        title: 'Finish accounting',
        completed: false,
      },
      {
        id: 1,
        title: 'Interview prep',
        completed: false,
      },
    ];
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  getTodos() {
    return [
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

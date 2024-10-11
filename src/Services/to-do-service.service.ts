import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { toDoList, toDoListData } from '../interfaces';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  HttpClient = inject(HttpClient);
  ToDo: toDoListData[] = [];
  constructor() {
    this.HttpClient.get<toDoList>('http://localhost:3000/toDo')
      .pipe(map((el: toDoList) => el?.data))
      .subscribe({
        next: (val: toDoListData[]) => {
          this.ToDo.push(...val);
        },
        error: (err) => console.error('Failed to load ToDos', err),
      });
  }
  onSubmit(title: string) {
    this.HttpClient.post('http://localhost:3000/toDo', {
      title: title,
    }).subscribe({
      next: (val) => {
        return val;
      },
    });
    window.location.reload();
  }
  get TODO() {
    return this.ToDo;
  }

  deleteToDo(id: string) {
    this.HttpClient.delete(`http://localhost:3000/todo/${id}`).subscribe({
      next: () => {
        this.ToDo = this.ToDo.filter((todo) => todo._id !== id);
      },
    });
  }
}

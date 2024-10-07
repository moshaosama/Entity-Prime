import { Component, inject } from '@angular/core';
import { ListsService } from '../Services/lists-service.service';
import { ToDoService } from '../Services/to-do-service.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.css',
})
export class TodoPageComponent {
  listService = inject(ListsService);
  toDoService = inject(ToDoService);

  form = new FormGroup({
    title: new FormControl(''),
  });

  get Todo() {
    return this.toDoService.TODO;
  }
  onSubmit(title: string) {
    this.toDoService.onSubmit(title);
  }
  get Color() {
    return this.listService.backgroundColor;
  }
}

import { Routes } from '@angular/router';
import { TodoPageComponent } from '../todo-page/todo-page.component';
import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [
  {
    path: 'Application/todo',
    component: TodoPageComponent,
  },
  {
    path: 'Application/contact',
    component: ContactComponent,
  },
];

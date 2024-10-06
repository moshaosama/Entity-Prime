import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ListsService } from '../Services/lists-service.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  listService = inject(ListsService);
  get Color() {
    return this.listService.backgroundColor;
  }
}

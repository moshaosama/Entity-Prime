import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { OffcanvasService } from '../../Services/offcanvas.service';
import { ListsService } from '../../Services/lists-service.service';

@Component({
  selector: 'app-offcanvas-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offcanvas-home.component.html',
  styleUrl: './offcanvas-home.component.css',
})
export class OffcanvasHomeComponent {
  OffcanvasService = inject(OffcanvasService);
  listService = inject(ListsService);

  get Color() {
    return this.listService.backgroundColor;
  }

  get isHomeOpen() {
    return this.OffcanvasService.isHomeOpen;
  }
}

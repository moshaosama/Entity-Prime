import { Component, inject } from '@angular/core';
import { OffcanvasService } from '../../Services/offcanvas.service';
import { CommonModule } from '@angular/common';
import { ListsService } from '../../Services/lists-service.service';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-offcanvas-application',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './offcanvas-application.component.html',
  styleUrl: './offcanvas-application.component.css',
})
export class OffcanvasApplicationComponent {
  offcanvasService = inject(OffcanvasService);
  listService = inject(ListsService);

  get Color() {
    return this.listService.backgroundColor;
  }

  get isApplicationOpen() {
    return this.offcanvasService.isApplicationsOpen;
  }
}

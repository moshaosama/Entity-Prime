import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ListsService } from '../Services/lists-service.service';
import { OffcanvasService } from '../Services/offcanvas.service';
import { OffcanvasResponsiveComponent } from '../Offcanvases/offcanvas-responsive/offcanvas-responsive.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, OffcanvasResponsiveComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  listService = inject(ListsService);
  offcanvasService = inject(OffcanvasService);

  ResponsiveOpen() {
    this.offcanvasService.ResponsiveOpen();
    console.log(this.offcanvasService.isResponsiveOpen);
  }
  get isResponsiveOpen(): boolean {
    return this.offcanvasService.isResponsiveOpen;
  }
  get Color() {
    return this.listService.backgroundColor;
  }
}

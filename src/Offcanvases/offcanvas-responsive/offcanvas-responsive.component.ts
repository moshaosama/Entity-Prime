import { Component, inject } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { OffcanvasService } from '../../Services/offcanvas.service';
import { CommonModule } from '@angular/common';
import { ListsService } from '../../Services/lists-service.service';
import { Sidbar } from '../../interfaces';
import { OffcanvasHomeComponent } from '../offcanvas-home/offcanvas-home.component';
import { OffcanvasApplicationComponent } from '../offcanvas-application/offcanvas-application.component';

@Component({
  selector: 'app-offcanvas-responsive',
  standalone: true,
  imports: [
    SidebarComponent,
    CommonModule,
    OffcanvasHomeComponent,
    OffcanvasApplicationComponent,
  ],
  templateUrl: './offcanvas-responsive.component.html',
  styleUrl: './offcanvas-responsive.component.css',
})
export class OffcanvasResponsiveComponent {
  offcanvasService = inject(OffcanvasService);
  listService = inject(ListsService);
  activatedButton!: number;
  ResponsiveOpen() {
    this.offcanvasService.ResponsiveOpen();
  }

  get Color() {
    return this.listService.backgroundColor;
  }

  get isResponsiveOpen() {
    return this.offcanvasService.isResponsiveOpen;
  }
  HomeOpen() {
    this.offcanvasService.isApplicationsOpen = false;
  }
  applicationOpen() {
    this.offcanvasService.ApplicationOpen();
    this.offcanvasService.isHomeOpen = false;
  }
  onCLick(button: number) {
    this.activatedButton = button;
  }
  Sidebar: Sidbar[] = [
    {
      id: 1,
      title: 'Home',
      image: 'home (1).png',
      EventHandler: () => this.HomeOpen(),
    },
    {
      id: 2,
      title: 'Applications',
      image: 'application.png',
      EventHandler: () => this.applicationOpen(),
    },
    {
      id: 3,
      title: 'Pages',
      image: 'page.png',
      EventHandler: () => null,
    },
    {
      id: 4,
      title: 'Tables Charts',
      image: 'bar-chart.png',
      EventHandler: () => null,
    },
    {
      id: 5,
      title: 'Table Form',
      image: 'edit.png',
      EventHandler: () => null,
    },
    {
      id: 6,
      title: 'Ui Collections',
      image: 'plugin.png',
      EventHandler: () => null,
    },
    {
      id: 7,
      title: 'One Level...',
      image: 'side-menu.png',
      EventHandler: () => null,
    },
  ];
}

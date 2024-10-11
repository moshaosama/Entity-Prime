import { Component, inject } from '@angular/core';
import { Sidbar } from '../interfaces';
import { ListsService } from '../Services/lists-service.service';
import { CommonModule } from '@angular/common';
import { OffcanvasService } from '../Services/offcanvas.service';
import { OffcanvasHomeComponent } from '../Offcanvases/offcanvas-home/offcanvas-home.component';
import { OffcanvasApplicationComponent } from '../Offcanvases/offcanvas-application/offcanvas-application.component';
import { RouterOutlet } from '@angular/router';
import { OffcanvasResponsiveComponent } from '../Offcanvases/offcanvas-responsive/offcanvas-responsive.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    OffcanvasHomeComponent,
    OffcanvasApplicationComponent,
    RouterOutlet,
    OffcanvasResponsiveComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  activatedButton!: number;
  listService = inject(ListsService);
  offcanvasService = inject(OffcanvasService);
  constructor() {
    console.log(this.offcanvasService.isHomeOpen);
  }
  HomeOpen() {
    this.offcanvasService.HomeOpen();
    this.offcanvasService.isApplicationsOpen = false;
  }
  applicationOpen() {
    this.offcanvasService.ApplicationOpen();
    this.offcanvasService.isHomeOpen = false;
  }

  get Color() {
    return this.listService.backgroundColor;
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

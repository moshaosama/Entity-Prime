import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { OffcanvasColorComponent } from '../Offcanvases/offcanvas-color/offcanvas-color.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { OffcanvasHomeComponent } from "../Offcanvases/offcanvas-home/offcanvas-home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    OffcanvasColorComponent,
    SidebarComponent,
    OffcanvasHomeComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Enlite_Prime';
}

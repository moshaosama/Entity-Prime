import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject } from '@angular/core';
import { ListsService } from '../../Services/lists-service.service';

@Component({
  selector: 'app-offcanvas-color',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offcanvas-color.component.html',
  styleUrl: './offcanvas-color.component.css',
})
export class OffcanvasColorComponent implements AfterViewInit {
  listService = inject(ListsService);
  Color: any = this.listService.Color;
  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen);
  }
  ngAfterViewInit() {
    let lis = document.querySelectorAll('ul li');
    lis.forEach((li) => {
      if (window.localStorage.getItem('Color')) {
        this.Color = window.localStorage.getItem('Color');
      }
      li.addEventListener('click', (el: any) => {
        el.preventDefault();
        this.listService.setColor(el?.currentTarget?.dataset?.color);
        this.Color = window.localStorage.getItem('Color');
      });
    });
  }
  get backGroundColor() {
    return this.listService.backgroundColor;
  }
}

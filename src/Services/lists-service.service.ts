import { AfterViewInit, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListsService {
  Color: any = window.localStorage.getItem('Color');

  setColor(color: string) {
    window.localStorage.setItem('Color', color);
    this.Color = color;
  }
  get backgroundColor() {
    return this.Color;
  }
}

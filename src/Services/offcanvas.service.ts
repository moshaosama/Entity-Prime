import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OffcanvasService {
  isHomeOpen = false;
  HomeOpen() {
    this.isHomeOpen = !this.isHomeOpen;
    console.log('Mosha');
  }
  //////////////////////////////////
  isApplicationsOpen = false;
  ApplicationOpen() {
    this.isApplicationsOpen = !this.isApplicationsOpen;
  }
  //////////////////////////////////
}

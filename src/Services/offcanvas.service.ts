import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OffcanvasService {
  isHomeOpen = true;
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
  isResponsiveOpen = false;
  ResponsiveOpen() {
    this.isResponsiveOpen = !this.isResponsiveOpen;
  }
}

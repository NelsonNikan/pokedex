import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { INavegationService } from './navegation.service.interface';

@Injectable({
  providedIn: 'root',
})
export class NavegationService implements INavegationService {
  constructor(private route: Router, private location: Location) {}

  navegar(navegate: any) {
    this.route.navigate([navegate]);
  }

  get getLocation() {
    if (this.location.path() == '') {
      return 'home';
    } else {
      return this.location.path();
    }
  }
}

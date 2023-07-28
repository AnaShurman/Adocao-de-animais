import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
          {
            label: 'Dashboard',
            icon: '',
            routerLink:'dashboard'
          },
          {
            label: 'Cães',
            icon: '',
            routerLink:'caes'

          },
          {
            label: 'Gatos',
            icon: '',
            routerLink:'gatos'

          },
          {
            label: 'Usuario',
            icon: '',
            routerLink:'usuario'

          },
        ]
     
  }
}

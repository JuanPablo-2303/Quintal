import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  rutas = [
    {
      name: 'Youtube',
      path: '/home'
    },
    {
      name: 'Imagenes',
      path: '/contact'
    },
    {
      name: 'Nombres',
      path: '/post'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  rutas = [
    {
      name: 'Google',
      path: '/home'
    },
    {
      name: 'Nombres y correo',
      path: '/about'
    },
    {
      name: 'Nombre',
      path: '/contact'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mensajes: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.mensajes = this.dataService.getContact();
  }

}

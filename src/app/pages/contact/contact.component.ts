import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  mensajes: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.mensajes = this.dataService.getContact();
  }

}

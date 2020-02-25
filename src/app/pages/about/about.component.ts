import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  mensajes: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.mensajes = this.dataService.getAbout();

    //this.dataService.getAbout()
      //.subscribe( (about: any[]) => {
        //console.log(about);
          //this.mensajes = about;
      //});
  }

}

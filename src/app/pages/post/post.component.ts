import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }
  /*escucharClick(id: number){
    console.log('Estas pushando id: ',id);
  }*/

}

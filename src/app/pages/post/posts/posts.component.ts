import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { every } from 'rxjs/operators';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

@Input() mensaje: any;
@Output() cickPost = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.cickPost.emit(this.mensaje.id);
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { every } from 'rxjs/operators';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

@Input() mensaje: any;

@Output() clickPosts = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.clickPosts.emit(this.mensaje.id);
  }
}

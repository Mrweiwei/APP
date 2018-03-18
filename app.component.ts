import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private todolist:Array<any>;
  private data:Array<any>;

  next(){
    this.todolist=this.data;
  }





getData(event){
    this.todolist=event;
    this.data=this.todolist;
    //console.log(this.data);
  }
  
}

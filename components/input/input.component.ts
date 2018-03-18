import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { 
    }
    @Output() event=new EventEmitter();
    content='';
    todolist=[];

    up(){
      this.todolist.push(this.content);
       this.content = '';
      this.event.emit(this.todolist);
     
    //console.log(this.todolist);
    }




  ngOnInit() {
  }

}

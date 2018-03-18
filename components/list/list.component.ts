import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }
  @Input() todolist;
  comlist=[];
  ngOnInit() {}
    delData(i){
      this.todolist.splice(i,1);
    }
    change(i){
      this.comlist.push(this.todolist[i])
      this.todolist.splice(i,1);
    }
    delData2(i){
      this.comlist.splice(i,1);
    }
    change2(i){
      this.todolist.push(this.comlist[i])
      this.comlist.splice(i,1);
    }
  }
  


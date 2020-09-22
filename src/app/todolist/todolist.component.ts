import { Component, OnInit ,ViewChild} from '@angular/core';
import { List } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

 
taskName: any = ""; // Entered Text
taskList = []; // Array to store tasks
 
constructor() {}
 

addTask() {
if (this.taskName.length > 0) {
let task = this.taskName;
this.taskList.push(task);
this.taskName = "";
}
}

deleteTask(index) {
this.taskList.splice(index, 1);
}



  ngOnInit() {
  }

}
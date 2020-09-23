import { Injectable } from '@angular/core';
import {Task} from './task';
@Injectable({
    providedIn: 'root'
})
export class TaskService {
    _taskList: Array<Task> = [{Id:1,content:"Task1", status:"High",priority:""},
    {Id:0,content:"template", status:"pending",priority:"high"},
    {Id:1,content:"web app", status:"todo",priority:"low"},
    {Id:2,content:"database", status:"done",priority:"high"},
    {Id:3,content:"ebook", status:"penging",priority:"medium"},
    {Id:4,content:"", status:"done",priority:"high"}
    ]
  constructor() { }

  getAllTask() {
    return this._taskList;
  }
updateTask(task: Task){
  console.log(task.Id);
  
     const index = this._taskList.findIndex(c => c.Id === task.Id);
     this._taskList[index] = task;
  }
deleteEmployee(id: number) {
     const emp = this._taskList.findIndex(c => c.Id == id);
     if (emp >-1) {
    this._taskList.splice(emp,1);
   }
 }
 addTask(task) {

   this._taskList.push(task);

 }
}
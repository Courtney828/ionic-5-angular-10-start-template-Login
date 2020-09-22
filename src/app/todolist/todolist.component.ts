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
   @ViewChild(List) list: List;

  @ViewChild('sectionSelect') sectionSelect: Select;
  newTask: string;
  newTaskPriority: string;
  items: [];
  selecteOption: any;
  noOfTasks: number;
  constructor(private toastCtrl: ToastController, public alertCtrl: AlertController) { }
  presentToast(statusText: string) {
    let toast = this.toastCtrl.create({
      message: statusText,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  showConfirm() {
    let prompt = this.alertCtrl.create({
      title: 'Edit',
      message: "Update the task",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('data', data);
            //this.newTask = data.title;
            this.updateTask(data.title);
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }


  doFilter() {
    this.sectionSelect.open();
    console.log('hello')
  }
  ngOnInit() {
    this.newTask = '';
    this.newTaskPriority = 'vl';
    this.items = [{
      "id": 0,
      "content": "This is the task!!!",
      "status": false,
      "priority": "green"
    }, {
      "id": 0,
      "content": "This is the task!!!",
      "status": true,
      "priority": "green"
    }, {
      "id": 0,
      "content": "This is the task!!!",
      "status": false,
      "priority": "violet"
    }, {
      "id": 0,
      "content": "This is the task!!!",
      "status": false,
      "priority": "violet"
    },
    {
      "id": 0,
      "content": "This is the task!!!",
      "status": true,
      "priority": "violet"
    }, {
      "id": 0,
      "content": "This is the task!!!",
      "status": true,
      "priority": "yellow"
    }, {
      "id": 0,
      "content": "This is the task!!!",
      "status": true,
      "priority": "yellow"
    }, {
      "id": 0,
      "content": "This is the task!!!",
      "status": true,
      "priority": "yellow"
    }, {
      "id": 0,
      "content": "This is the task!!!",
      "status": false,
      "priority": "pink"
    }, {
      "id": 0,
      "content": "This is the task!!!",
      "status": true,
      "priority": "pink"
    }, {
      "id": 0,
      "content": "This is the task!!!",
      "status": true,
      "priority": "pink"
    }, {
      "id": 0,
      "content": "This is the task!!!",
      "status": true,
      "priority": "pink"
    }, {
      "id": 0,
      "content": "This is the task!!!",
      "status": true,
      "priority": "pink"
    }, {
      "id": 0,
      "content": "This is the task!!!",
      "status": false,
      "priority": "pink"
    }, {
      "id": 0,
      "content": "This is the task!!!",
      "status": true,
      "priority": "pink"
    },{
      "id": 0,
      "content": "This is the task!!!",
      "status": false,
      "priority": "green"
    }, {
      "id": 0,
      "content": "This is the task!!!",
      "status": true,
      "priority": "green"
    }, {
      "id": 0,
      "content": "This is the task!!!",
      "status": false,
      "priority": "violet"
    }, {
      "id": 0,
      "content": "This is the task!!!",
      "status": false,
      "priority": "violet"
    },
    {
      "id": 0,
      "content": "This is the task!!!",
      "status": true,
      "priority": "violet"
    }, {
      "id": 0,
      "content": "This is the task!!!",
      "status": true,
      "priority": "yellow"
    }, {
      "id": 0,
      "content": "This is the task!!!",
      "status": true,
      "priority": "yellow"
    }, {
      "id": 0,
      "content": "This is the task!!!",
      "status": true,
      "priority": "yellow"
    }, {
      "id": 0,
      "content": "This is the task!!!",
      "status": false,
      "priority": "pink"
    }, {
      "id": 0,
      "content": "This is the task!!!",
      "status": true,
      "priority": "pink"
    }, {
      "id": 0,
      "content": "This is the task!!!",
      "status": true,
      "priority": "pink"
    }, {
      "id": 0,
      "content": "This is the task!!!",
      "status": true,
      "priority": "pink"
    }, {
      "id": 0,
      "content": "This is the task!!!",
      "status": true,
      "priority": "pink"
    }, {
      "id": 0,
      "content": "This is the task!!!",
      "status": false,
      "priority": "pink"
    }, {
      "id": 0,
      "content": "This is the task!!!",
      "status": true,
      "priority": "pink"
    }];
  this.noOfTasks = this.items.length;
  }

  itemSelected(i: number) {
    this.selectedTask = i;
    this.items[i].status = !this.items[i].status;
    let statusText = (this.items[i].status) ? 'Task completed scuccessfully' : 'Task re-opened';
    this.presentToast(statusText);
  }

  addTask(): void {
    let newItem: any;
    newItem = {
      "id": this.items.length + 1,
      "content": this.newTask,
      "status": false,
      "priority": this.newTaskPriority
    };
    this.items.unshift(newItem);
    this.newTask = '';
    this.presentToast('Task added scuccessfully');
  }

  taskPriorityChange(event, selecteOption): void {
    //this.newTaskPriority = event;
    switch(event){
      case 'h': this.newTaskPriority = 'positive'; break;
    }
  }

  updateTask(task:string, ):void{
     this.items[this.selectedTask].content = task;
     this.presentToast('Task updated scuccessfully');
     this.noOfTasks = this.items.length;
  }

  dummy():void{
    console.log("helloooooooooo");
  }
}
 



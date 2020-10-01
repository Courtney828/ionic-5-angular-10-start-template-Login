import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {


 buttons: any[] = [
    {name: 'button1', key: 'b1'},
    {name: 'button2', key: 'b2'},
    {name: 'button3', key: 'b3'},
    {name: 'button4', key: 'b4'},
    {name: 'button5', key: 'b5'}]
    ;
  constructor() { }

  ngOnInit() {
  }

}
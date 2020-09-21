import { Component, OnInit } from '@angular/core';
import {  ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Content } from 'ionic-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@ViewChild(Content) content: Content;
  constructor() { }

  
ngOnInit() {
        
    }
}
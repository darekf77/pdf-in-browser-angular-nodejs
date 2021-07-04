import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import printjs from 'print-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('dialog') dialog: TemplateRef<any>;

  isOpen = {
    'js-pdf': false,
    'ms-word': false,
    'google': false,
    'gtech-ms-word': false
  };


  constructor(public matDialog: MatDialog) {

  }

  ngOnInit(): void {

  }

  dialogRef: MatDialogRef<any>

  screen = {
    width: 0,
    height: 0
  }

  toogleDialog(type) {

    this.screen.height = window.innerHeight
    this.screen.width = window.innerWidth
    Object.keys(this.isOpen).forEach(key => {
      if (key === type) {
        this.isOpen[key] = !this.isOpen[key];
      } else {
        this.isOpen[key] = false
      }
    })
    console.log('isopen', this.isOpen)
  }


}
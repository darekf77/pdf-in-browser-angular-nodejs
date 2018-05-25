import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialogRef, MatDialog } from "@angular/material/dialog";
import printjs from 'print-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('dialog') dialog: TemplateRef<any>;

  constructor(public matDialog: MatDialog) {

  }

  openPdfjs = false;



  ngOnInit(): void {

  }

  dialogRef: MatDialogRef<any>

  screen = {
    width: 0,
    height: 0
  }

  openDialog() {
    this.screen.height = window.innerHeight
    this.screen.width = window.innerWidth
    if (this.dialogRef) {
      this.dialogRef.close()
      this.dialogRef = undefined;
    }
    else {
      this.dialogRef = this.matDialog.open(this.dialog)
    }
  }


}

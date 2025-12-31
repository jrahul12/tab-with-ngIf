import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TabMaterialComponent } from '../tab-material/tab-material.component';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent  {

  constructor(private dialogRef:MatDialogRef<TabMaterialComponent>) { }

  onRemove():void{
    this.dialogRef.close(true)
  }
  onCancel():void{
    this.dialogRef.close(false)
  }

}

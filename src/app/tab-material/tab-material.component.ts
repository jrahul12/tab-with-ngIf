import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { studentData, userData } from '../component/const/data';
import { Istudent, Itodo } from '../component/model/type';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-tab-material',
  templateUrl: './tab-material.component.html',
  styleUrls: ['./tab-material.component.scss']
})
export class TabMaterialComponent {

  constructor(private snackBar: MatSnackBar,
    private _matDialog: MatDialog
  ) { }

  todoArr: Itodo[] = userData
  @ViewChild('todoItem') todoItem!: ElementRef<HTMLInputElement>
  isInEditMode: boolean = false;
  editId!: string;

  onAdd(): void {
    let value = this.todoItem.nativeElement.value.trim();
    if (!value) return;
    let createObj: Itodo = {
      title: value,
      id: Date.now().toString()
    }
    this.todoArr.push(createObj);
    this.todoItem.nativeElement.value = "";
    this.snackBar.open(`todo is added successFully`, 'close', {
      horizontalPosition: 'left',
      verticalPosition: 'top',
      duration: 3000
    })
  }
  onRemove(id: string) {
    let dialogRef = this._matDialog.open(ConfirmComponent, {
      width: '400px',
      disableClose: true
    })
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        let result = this.todoArr.findIndex(t => t.id === id);
        if (result > -1) {
          this.todoArr.splice(result, 1)
        }
        this.snackBar.open(`todo with id${id} removed successFully`, 'close', {
          horizontalPosition: 'left',
          verticalPosition: 'top',
          duration: 3000
        })
      }
    })
  }
  onEdit(todo: Itodo) {
    this.todoItem.nativeElement.value = todo.title;
    this.isInEditMode = true;
    this.editId = todo.id
  }
  onUpdate() {
    let update_todo: Itodo = {
      title: this.todoItem.nativeElement.value,
      id: this.editId
    }
    let getIndex = this.todoArr.findIndex(t => t.id === update_todo.id);
    this.todoArr[getIndex] = update_todo;
    this.todoItem.nativeElement.value = "";
    this.isInEditMode = false;
    this.snackBar.open(`todo was updated successfully`, 'close', {
      horizontalPosition: 'left',
      verticalPosition: 'top',
      duration: 3000
    })
  }

  /////////////////////////////////////////////student/////////////////////////

  stdArr: Istudent[] = studentData;
  @ViewChild('fname') fname!: ElementRef<HTMLInputElement>
  @ViewChild('lname') lname!: ElementRef<HTMLInputElement>
  @ViewChild('email') email!: ElementRef<HTMLInputElement>
  @ViewChild('contact') contact!: ElementRef<HTMLInputElement>

  onAdd1(): void {
    let fname = this.fname.nativeElement.value;
    let lname = this.lname.nativeElement.value;
    let email = this.email.nativeElement.value;
    let contact = this.contact.nativeElement.value;
    if (!fname || !lname || !email || !contact) return;
    let createObj: Istudent = {
      fname: fname,
      lname: lname,
      email: email,
      contact: contact,
      id: Date.now().toString()
    }
    this.stdArr.unshift(createObj)
    this.fname.nativeElement.value = ""
    this.lname.nativeElement.value = ""
    this.email.nativeElement.value = ""
    this.contact.nativeElement.value = ""
    this.snackBar.open(`student added successFully`, 'close', {
      horizontalPosition: 'left',
      verticalPosition: 'top',
      duration: 3000
    })
  }
onRemove1(id: string): void {
  let dialogRef1 = this._matDialog.open(ConfirmComponent, {
    width: '400px',
    disableClose: true
  });

  dialogRef1.afterClosed().subscribe((result: boolean) => {
    if (result) {
      let value = this.stdArr.findIndex(s => s.id === id);
      if (value > -1) {
        this.stdArr.splice(value, 1);

        this.snackBar.open(`student removed successFully`, 'close', {
          horizontalPosition: 'left',
          verticalPosition: 'top',
          duration: 3000
        });
      }
    }
  });
}

  onEdit1(std: Istudent): void {
    this.fname.nativeElement.value = std.fname;
    this.lname.nativeElement.value = std.lname;
    this.email.nativeElement.value = std.email;
    this.contact.nativeElement.value = std.contact;
    this.isInEditMode = true;
    this.editId = std.id
  }
  onUpdate1(): void {
    let createObj: Istudent = {
      fname: this.fname.nativeElement.value,
      lname: this.lname.nativeElement.value,
      email: this.email.nativeElement.value,
      contact: this.contact.nativeElement.value,
      id: this.editId
    }
    let getIndex = this.stdArr.findIndex(s => s.id === createObj.id);
    this.stdArr[getIndex] = createObj
    this.fname.nativeElement.value = "";
    this.lname.nativeElement.value = "";
    this.email.nativeElement.value = "";
    this.contact.nativeElement.value = "";
    this.snackBar.open(`student update successFully`, 'close', {
      horizontalPosition: 'left',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}

import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MatDialogRef,
  MatDialog,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { StaffleaveService } from 'src/app/shared/services/staffleave.service';

@Component({
  selector: 'app-leaveshtml',
  templateUrl: './leaveshtml.component.html',
  styleUrls: ['./leaveshtml.component.scss'],
})
export class LeaveshtmlComponent implements OnInit {
  LeaveForm!:FormGroup
  constructor(private _dialogRef : MatDialogRef<LeaveshtmlComponent>,
    private _StaffleaveService : StaffleaveService,
    private dialog : MatDialog ,


    @Inject(MAT_DIALOG_DATA) public dialogData : any) {_dialogRef.disableClose = true }


    ngOnInit(): void {

this._StaffleaveService.GetAllLeaveAppl().subscribe(res=>{
  console.log(res);

})
      this.LeaveForm = new FormGroup({
        startdate: new FormControl(null, [Validators.required]),
        enddate: new FormControl(null, [Validators.required]),
        reason: new FormControl(null, [Validators.required]),
      });
    }

    closedDialog(){
      this._dialogRef.close();
    }


LeaveSubmit() {
  console.log("hello");

  let Obj: any = {


    ...this.LeaveForm.value,
    LeaveStatus: 'Pending',
    StaffName: localStorage.getItem('username'),
  };
  this._StaffleaveService.CreateObj(Obj).subscribe(res=>{
    console.log(res);

  });
  console.log(Obj);
  this.LeaveForm.reset();
}
}

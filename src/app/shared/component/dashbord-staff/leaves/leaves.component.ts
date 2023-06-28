import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LeaveshtmlComponent } from '../leaveshtml/leaveshtml.component';
import { HttpClient } from '@angular/common/http';
import { StaffleaveService } from 'src/app/shared/services/staffleave.service';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.scss']
})
export class LeavesComponent implements OnInit {
  applyLeavearr!: Array<any>;
  TotalLeaves!: number;
  TotalApproved!: number;
  TotalRejected!: number;
  TotalPending!: number;
  constructor(private _dialog : MatDialog,
    private _StaffleaveService: StaffleaveService,
    ) { }

  ngOnInit(): void {
    this._StaffleaveService.GetAllLeaveAppl().subscribe((res) => {
      if (res) {
        this.applyLeavearr = res;
        this.TotalLeaves = res.length;
        this.TotalApproved = res.filter(
          (ele) => ele.LeaveStatus === 'Approved'
        ).length;
        this.TotalRejected = res.filter(
          (ele) => ele.LeaveStatus === 'Rejected'
        ).length;
        this.TotalPending = res.filter(
          (ele) => ele.LeaveStatus === 'Pending'
        ).length;
      }
    });
  }

  OpenDialogBox(){
    const dialogRef =  this._dialog.open(LeaveshtmlComponent )

    dialogRef.afterClosed().subscribe(ele => {
     console.log("Dialog is Closed")
    })
  }
}

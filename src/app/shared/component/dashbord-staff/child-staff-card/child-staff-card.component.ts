import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StaffleaveService } from 'src/app/shared/services/staffleave.service';

@Component({
  selector: 'app-child-staff-card',
  templateUrl: './child-staff-card.component.html',
  styleUrls: ['./child-staff-card.component.scss']
})
export class ChildStaffCardComponent implements OnInit {


  baseurl: string = 'https://jsonplaceholder.typicode.com/users';
  applyLeavearr!: Array<any>;
  TotalLeaves!: number;
  TotalApproved!: number;
  TotalRejected!: number;
  TotalPending!: number;
  constructor(
    private _StaffleaveService: StaffleaveService,
    private _http: HttpClient
  ) {}
  arr: Array<any> = [];
  ngOnInit(): void {
    this._StaffleaveService.GetAllLeaveAppl().subscribe((res) => {
      if (res) {
        this.applyLeavearr = res;
    /*     this.TotalLeaves = res.length;
        this.TotalApproved = res.filter(
          (ele) => ele.LeaveStatus === 'Approved'
        ).length;
        this.TotalRejected = res.filter(
          (ele) => ele.LeaveStatus === 'Rejected'
        ).length;
        this.TotalPending = res.filter(
          (ele) => ele.LeaveStatus === 'Pending'
        ).length; */
      }
    });
  }


}

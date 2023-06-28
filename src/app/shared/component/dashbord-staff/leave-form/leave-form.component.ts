import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StaffleaveService } from 'src/app/shared/services/staffleave.service';

@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.scss'],
})
export class LeaveFormComponent implements OnInit {
  LeaveForm!: FormGroup;
  constructor(private _StaffleaveService: StaffleaveService) {}

  ngOnInit(): void {
    this.LeaveForm = new FormGroup({
      startdate: new FormControl(null, [Validators.required]),
      enddate: new FormControl(null, [Validators.required]),
      reason: new FormControl(null, [Validators.required]),
    });
  }

  LeaveSubmt() {
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

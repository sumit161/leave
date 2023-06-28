import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/component/login/login.component';
import { DashbordHodComponent } from './shared/component/dashbord-hod/dashbord-hod.component';
import { DashbordStaffComponent } from './shared/component/dashbord-staff/dashbord-staff.component';
import { AuthGuard } from './shared/services/auth.guard';
import { LeaveFormComponent } from './shared/component/dashbord-staff/leave-form/leave-form.component';
import { LeaveshtmlComponent } from './shared/component/dashbord-staff/leaveshtml/leaveshtml.component';
import { LeavesComponent } from './shared/component/dashbord-staff/leaves/leaves.component';
import { ChildStaffCardComponent } from './shared/component/dashbord-staff/child-staff-card/child-staff-card.component';
// import { SignUpComponent } from './shared/component/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  // {path:"leaves",component:LeavesComponent},
  // {path:"StaffSec/leaveForm",component:LeaveFormComponent},
  // {path:"StaffSec/leaveForm",component:LeavesComponent},
  // { path: 'HodSec', component: DashbordHodComponent   },
  { path: 'HodSec', component: DashbordHodComponent   ,canActivate:[AuthGuard],data:{userrole:"HOD"}},

  {
    path: 'StaffSec',
    component: LeavesComponent,
    canActivate:[AuthGuard],data:{userrole:"STAFF"},
    children: [{ path: 'staffCard', component: ChildStaffCardComponent }],
  },
  { path: 'signup', component: DashbordHodComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

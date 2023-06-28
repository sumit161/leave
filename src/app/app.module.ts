import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './shared/component/login/login.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { DashbordHodComponent } from './shared/component/dashbord-hod/dashbord-hod.component';
import { DashbordStaffComponent } from './shared/component/dashbord-staff/dashbord-staff.component';
import { RegisterComponent } from './shared/component/register/register.component';
import { SignUpComponent } from './shared/component/sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/module/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LeaveFormComponent } from './shared/component/dashbord-staff/leave-form/leave-form.component';
import { LeaveshtmlComponent } from './shared/component/dashbord-staff/leaveshtml/leaveshtml.component';
import { LeavesComponent } from './shared/component/dashbord-staff/leaves/leaves.component';
import { InterceptorService } from './shared/services/interceptor.service';
import { ChildStaffCardComponent } from './shared/component/dashbord-staff/child-staff-card/child-staff-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    DashbordHodComponent,
    DashbordStaffComponent,
    RegisterComponent,
    SignUpComponent,
    LeaveFormComponent,
    LeaveshtmlComponent,
    LeavesComponent,
    ChildStaffCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [    {
    provide :HTTP_INTERCEPTORS,
    useClass:InterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}

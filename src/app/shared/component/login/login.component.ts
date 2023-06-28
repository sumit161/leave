import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomRegex } from '../../validators/validators';
import { UsersService } from '../../services/users.service';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  LogInform!: FormGroup;
  IsHavingAccount: boolean = false;
  IsLock: boolean = true;
  radio: boolean = false;
  Departments: Array<any> = [
    'Civil',
    'Electrical',
    'Information Tecnology',
    'Mechanical',
    'Automobile',
  ];
  Userrole: Array<any> = ['HOD', 'STAFF'];
  constructor(
    private _router: Router,
    private _UsersService: UsersService,
    private _AuthService: AuthService,
    private _snackBar: MatSnackBar,
    private _LoaderService: LoaderService
  ) {
    this._LoaderService.logoutStatus.subscribe(res=>{
      this.IsHavingAccount=true
    })

  }
  //private _authService: AuthService
  ngOnInit(): void {

    this._UsersService.GetAllUsers().subscribe((res) => {
      console.log(res);
    });
    this.CreateSignupForm();

    this.LogInform = new FormGroup({
      userName: new FormControl(null, [
        Validators.required,
        Validators.maxLength(8),
        Validators.minLength(4),
        // noSpaceBarValidator.noSpace,
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.maxLength(8),
        Validators.minLength(4),
        // noSpaceBarValidator.noSpace,
      ]),
    });

    // signup
    this.LogInform = new FormGroup({
      userName: new FormControl(null, [
        Validators.required,
        Validators.maxLength(8),
        Validators.minLength(4),
        // noSpaceBarValidator.noSpace,
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.maxLength(8),
        Validators.minLength(4),
        // noSpaceBarValidator.noSpace,
      ]),
    });
  }
  LogIn() {
    console.log(this.LogInform);
  }

  NoNamePassword!: string;
  successfully!: string;
  OnlogIn() {
    // console.log('hi this is login button');

    this._UsersService.GetAllUsers().subscribe((res) => {
      let UserInfo = res.find(
        (ele) =>
          ele.userName.includes(this.LogInform.value.userName) &&
          ele.password.includes(this.LogInform.value.password)
      );
      if (!UserInfo) {
        this.NoNamePassword =
          'Your email and pasword do not match.please try again';
      }

      this._AuthService.LogInApp(UserInfo);
      if (UserInfo) {
        if (UserInfo.Userrole === 'STAFF') {
          this._router.navigate(['/StaffSec']);
        } else {
          this._router.navigate(['/HodSec']);
        }
      }
    });
  }

  // signnup

  signupForm!: FormGroup;
  countriesName: Array<string> = ['india', 'bangladesh'];
  CreateSignupForm() {
    this.signupForm = new FormGroup({
      firstName: new FormControl(null, [
        Validators.required,
        Validators.maxLength(8),
        Validators.minLength(4),
        // noSpaceBarValidator.noSpace,
      ]),
      userName: new FormControl(null, [
        Validators.required,
        Validators.maxLength(8),
        Validators.minLength(4),
        // noSpaceBarValidator.noSpace,
      ]),
      lastname: new FormControl(null, [
        Validators.required,
        Validators.maxLength(8),
        Validators.minLength(4),
        // noSpaceBarValidator.noSpace,
      ]),
      Email: new FormControl(null, [
        Validators.required,
        Validators.pattern(CustomRegex.email),
        // orbiddenvalidator.forbiddenName,
      ]),
      Departments: new FormControl(null, [Validators.required]),
      Userrole: new FormControl(null, [Validators.required]),
      phoneNumber: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),

      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(CustomRegex.password),
      ]),
    });
  }


  successfullyCreated!:string
  //onSignUp
  onSignUp() {
    console.log(this.signupForm);
    console.log(this.signupForm.value);
    // console.log(this.signupForm.value.date);
    // console.log(new Date(this.signupForm.value.date).getTime());
    if (new Date(this.signupForm.value.date).getTime() > 946684800000) {
      var error = 'allowed only before 1 jan 2000';
    }
    // this.signupForm.reset();
    let Obj: any = {
      ...this.signupForm.value,
    };
    console.log(Obj);
    if (Object.values(Obj).includes(null)) {
      this._snackBar.open('please fill all form');
    }
    this._UsersService.CreateObj(Obj).subscribe((res) => {
      console.log(res);

     this.successfullyCreated= " Congratulations, your account has been successfully created.please Go to logIn page"
     setTimeout(() => {
      this.successfullyCreated=""
     }, 3000);
    });
    this.signupForm.reset();
    this.IsHavingAccount= true;
  }
  // 1st way
  get getUserNameControl() {
    return this.signupForm.get('userName') as FormControl;
  }
  // 2nd way
  get f() {
    return this.signupForm.controls;
  }
  get skillsfromArray() {
    return this.signupForm.get('skills') as FormArray;
  }
  addMoreSkills() {
    if (this.skillsfromArray.length < 5) {
      let skillCotrol = new FormControl(null);
      this.skillsfromArray.push(skillCotrol);
    } else {
      alert`we add only 5 skills`;
    }
  }
  DeleteSkills() {
    // this.skillsfromArray.pop()
  }
}

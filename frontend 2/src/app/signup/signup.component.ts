import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SnackbarService } from '../services/snackbar.service';
import { UserService } from '../services/user.service';
import {NgxUiLoaderService } from 'ngx-ui-loader';
import { GlobalConstants } from '../shared/global-constraints';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm:any = FormGroup;
  responseMessage:any;

  constructor(private formBuilder:UntypedFormBuilder,
    private router:Router,
    private userService:UserService,
    private snackbarService:SnackbarService,
    private dialogRef:MatDialogRef<SignupComponent>,
    private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name:[null,[Validators.required,Validators.pattern(GlobalConstants.nameRegex)]],
      email:[null,[Validators.required,Validators.pattern(GlobalConstants.emailRegex)]],
      phoneNumber:[null,[Validators.required,Validators.pattern(GlobalConstants.phoneNumberRegex)]],
      password:[null,[Validators.required]],
    });
  }

  handleSubmit(){
    this.ngxService.start();
    var formData = this.signupForm.value;
    var data = {
      name: formData.name,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      password: formData.password,
    }
    this.userService.signup(data).subscribe((response:any)=>{
      this.ngxService.stop();
      this.dialogRef.close();
      this.responseMessage = response?.message;
      this.snackbarService.openSnackBar(this.responseMessage,"");
      this.router.navigate(['/']);
    },(error)=>{
      this.ngxService.stop();
      if(error.error?.message){
        this.responseMessage = error.error?.message;
      }else{
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackbarService.openSnackBar(this.responseMessage,GlobalConstants.error);
    });
  }

}

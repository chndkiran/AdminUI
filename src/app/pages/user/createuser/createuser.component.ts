import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-createuser',
  imports: [RouterLink,CommonModule],
  templateUrl: './createuser.component.html',
  styleUrl: './createuser.component.css'
})
export class CreateuserComponent implements OnInit{

  userForm :FormGroup; 
  submitted = false;

 constructor(private fb: FormBuilder) {
    // Create form with default value and validation  
    this.userForm = this.fb.group({
     userId:new FormControl(''),
    userName:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    confirmPassword:new FormControl('', [Validators.required]),
    firstName:new FormControl('',[Validators.required]),
    lastName:new FormControl('',[Validators.required]),
    middleName:new FormControl(''),
    emailId:new FormControl('',[Validators.required,Validators.email]),
    mobile1:new FormControl('',[Validators.required]),
    mobile2:new FormControl(''),
    telePhone:new FormControl(''),
    gender:new FormControl('',[Validators.required]),
    dob:new FormControl(''),
    photo:new FormControl(''),
    userRoleId:new FormControl(''),   
    isActive:new FormControl('')   
  },
  { Validators: this.passwordMatchValidator });
  }  
genders = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
    { label: 'Other', value: 'Other' }
  ];
 passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

   get f() {
    return this.userForm.controls;
  }

  ngOnInit(): void {
    
  }

  onSubmit(){

  }
}

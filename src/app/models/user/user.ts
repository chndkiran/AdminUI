import { identity } from "rxjs";

export class User {
    userId:number;
    userName:string;
    password:string;
    firstName:string;
    lastName:string;
    middleName:string;
    emailId:string;
    mobile1:string;
    mobile2:string;
    telePhone:string;
    gender:string;
    dob:Date;
    photo:string;
    userRoleId:number;
    addressId:number;
    isActive:boolean;

    constructor(userid:number,username:string,password:string,firstname:string,lastname:string,middlename:string,email:string,mobile1:string,mobile2:string,telephone:string,gender:string,dob:Date,photo:string,userroleid:number,addressid:number,isActive:boolean){
        this.userId=userid;
        this.userName=username;
        this.password=password;
        this.firstName=firstname;
        this.lastName=lastname;
        this.middleName=middlename;
        this.emailId=email;
        this.mobile1=mobile1;
        this.mobile2=mobile2;
        this.telePhone=telephone;
        this.gender=gender;
        this.dob=dob;
        this.photo=photo;
        this.userRoleId=userroleid;
        this.addressId=addressid;
        this.isActive=isActive;
    }

    getuserName(userid:number){
        return this.firstName+this.lastName;
    }

}

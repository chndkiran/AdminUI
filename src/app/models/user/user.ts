export class User {
    userid:number;
    usrname:string;
    password:string;
    firstname:string;
    lastname:string;
    email:string;
    mobile:string;

    constructor(userid:number,username:string,password:string,firstname:string,lastname:string,email:string,mobile:string){
        this.userid=userid;
        this.usrname=username;
        this.password=password;
        this.firstname=firstname;
        this.lastname=lastname;
        this.email=email;
        this.mobile=mobile;
    }

    getuserName(userid:number){
        return this.firstname+this.lastname;
    }

}

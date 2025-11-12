import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user/user';
import { UserserviceService } from '../../../services/users/userservice.service';
import { RouterLink } from '@angular/router';
import { NgxPaginationModule } from "ngx-pagination";
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy,ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-userslist',
  imports: [NgxPaginationModule,CommonModule],
  templateUrl: './userslist.component.html',
  styleUrl: './userslist.component.css'
})
export class UserslistComponent implements OnInit{
users:User[]=[];
  page = 1;
  itemsPerPage = 5;
  totalCount = 0;
  pageCount=0;

  constructor(private userService: UserserviceService,private cdr: ChangeDetectorRef){  
  }
  
  ngOnInit():void{
  this.loadUsers(this.page,this.itemsPerPage);
   //this.totalPages = Math.ceil(this.categories.length / this.itemsPerPage);
      //this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
     // this.updatePaginatedData();
  }

  loadUsers(page:number,itemsPerPage:number){
  this.userService.getAllUsers(page).subscribe((data: any)=>{
    this.users.length=0;
    this.users=[...data.users];
    console.log(data);
    this.totalCount=data.pagination.totalCount;
    this.pageCount=data.pagination.pageCount;
    this.cdr.markForCheck();
  });
  
}
onPageChange(page: number): void {
    this.page = page;
    this.loadUsers(this.page,this.itemsPerPage);
  }
}

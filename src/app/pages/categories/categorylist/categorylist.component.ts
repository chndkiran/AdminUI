import { Component, OnInit } from '@angular/core';
import { categories } from '../../../models/categories/categories';
import { CategoryserviceService } from '../../../services/categories/categoryservice.service';
import { RouterLink } from '@angular/router';
import { NgxPaginationModule } from "ngx-pagination";
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy,ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-categorylist',
  standalone: true,
  imports: [RouterLink, NgxPaginationModule,CommonModule],
  templateUrl: './categorylist.component.html',
  styleUrl: './categorylist.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategorylistComponent implements OnInit{
  categories:categories[]=[];
  page = 1;
  itemsPerPage = 10;
  totalCount = 0;
  pageCount=0;



constructor(private catService: CategoryserviceService,private cdr: ChangeDetectorRef){  
}

ngOnInit():void{
this.loadCategories(this.page,this.itemsPerPage);
 //this.totalPages = Math.ceil(this.categories.length / this.itemsPerPage);
    //this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
   // this.updatePaginatedData();
}

loadCategories(page:number,itemsPerPage:number){
  this.catService.getAllCategories(page).subscribe((data: any)=>{
    this.categories.length=0;
    this.categories=[...data.categories];
    console.log(data);
    this.totalCount=data.pagination.totalCount;
    this.pageCount=data.pagination.pageCount;
    this.cdr.markForCheck();
  });
}

deleteCategory(categoryId:number){
  this.catService.deleteCategory(categoryId).subscribe(()=>{
    this.loadCategories(this.page,this.itemsPerPage);
  })
}

 onPageChange(page: number): void {
    this.page = page;
    this.loadCategories(this.page,this.itemsPerPage);
  }

}

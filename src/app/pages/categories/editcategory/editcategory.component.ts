import { Component, ChangeDetectorRef } from '@angular/core';
import { categories } from '../../../models/categories/categories';
import { CategoryserviceService } from '../../../services/categories/categoryservice.service';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-editcategory',
  imports: [RouterLink,RouterModule,FormsModule],
  templateUrl: './editcategory.component.html',
  styleUrl: './editcategory.component.css'
})
export class EditcategoryComponent {
  
categoryId=0;
categoryName='';
categoryDescription='';
isActive=false;
error=''
constructor(private catService:CategoryserviceService,private cdr: ChangeDetectorRef, private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void{
    this.categoryId = this.route.snapshot.params['categoryId'];

    this.catService.findCategory(this.categoryId).subscribe((category: categories) => {
        this.categoryName = category.categoryName;
        this.categoryDescription = category.categoryDescription;
        this.isActive=category.isActive;
        this.cdr.markForCheck();
    })
  }

   submit(){
    if(!this.categoryName || !this.categoryDescription){
      this.error = "Category Name and Description fields are required.";
      return;
    }

    const input = {
      categoryId: this.categoryId,      
      categoryDescription: this.categoryDescription,
      menuName:'',
      categoryName: this.categoryName,
      isActive:this.isActive
    };

    this.catService.updateCategory(this.categoryId, input).subscribe();

    alert("Category updated");
    
    this.router.navigate(['/categorylist']);
  }
}

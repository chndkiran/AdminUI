import { Component } from '@angular/core';
import { RouterLink,Router,RouterModule, Route, ActivatedRoute} from '@angular/router';
import { categories } from '../../../models/categories/categories';
import { CategoryserviceService } from '../../../services/categories/categoryservice.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-addcategory',
  imports: [RouterLink,RouterModule,FormsModule],
  templateUrl: './addcategory.component.html',
  styleUrl: './addcategory.component.css'
})
export class AddcategoryComponent {
  categoryId=0;
categoryName='';
categoryDescription='';
isActive=false;
error=''
constructor(private catService:CategoryserviceService,private router:Router,private route:ActivatedRoute){}


submit(){

    if(!this.categoryName || !this.categoryDescription){
      this.error = "Title and Body fields are required.";
      return;
    }

   const category: categories = {
     categoryId:0,
     menuName:'',
     categoryName: this.categoryName,
     categoryDescription: this.categoryDescription,
     isActive: true
   };   

    this.catService.createCategory(category).subscribe();
    alert("Category created");    
    this.router.navigate(['/categorylist']);
  }

}

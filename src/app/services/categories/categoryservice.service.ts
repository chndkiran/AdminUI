import { EnvironmentInjector, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { categories } from '../../models/categories/categories';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryserviceService {
  private apiURL = environment.apiUrl;
  private endPoint='Category';

  constructor(private http:HttpClient){
  }

  getAllCategories(page:number): Observable<any> {
    return this.http.get<categories[]>(this.apiURL+this.endPoint+'/GetAllCategories'+'?pageNumber=' + page);
  }

  getCategoriesById(categoryId:number):Observable<categories>{
    return this.http.get<categories>(this.apiURL+this.endPoint+'/GetCategoryById/'+categoryId);
  }

  createCategory(category:categories):Observable<categories>{
    return this.http.post<categories>(this.apiURL+this.endPoint+"/AddCategory", category);
  }

  findCategory(categoryId: number): Observable<categories>{
    return this.http.get<categories>(this.apiURL+this.endPoint+"/GetCategoryById/" + categoryId);
  }

  updateCategory(categoryId:number, data:categories):Observable<categories>{
    return this.http.put<categories>(this.apiURL+this.endPoint+"/UpdateCategory",data);
  }

   deleteCategory(categoryId: number): Observable<categories>{
    return this.http.delete<categories>(this.apiURL+this.endPoint+"/DeleteCategory/" + categoryId);
  }

}

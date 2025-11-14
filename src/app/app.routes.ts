import { Routes } from '@angular/router';

import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CategorylistComponent } from './pages/categories/categorylist/categorylist.component';
import { AddcategoryComponent } from './pages/categories/addcategory/addcategory.component';
import { EditcategoryComponent } from './pages/categories/editcategory/editcategory.component';
import { UserslistComponent } from './pages/user/userslist/userslist.component';
import { CreateuserComponent } from './pages/user/createuser/createuser.component';
import { EdituserComponent } from './pages/user/edituser/edituser.component';


export const routes: Routes = [
    {path:'',component:DashboardComponent},    
    {path:'categories/categorylist',component:CategorylistComponent},
    {path:'categories/addcategory',component:AddcategoryComponent},
    //{path: "categories/category/:categoryId/edit", component: EditcategoryComponent },
    {path:'user/userlist',component:UserslistComponent},
    {path:'user/adduser',component:CreateuserComponent},
    //{path:'user/user/:userId/edit',component:EdituserComponent}
    //{ path: "category/:categoryId", component: Show },
    
];

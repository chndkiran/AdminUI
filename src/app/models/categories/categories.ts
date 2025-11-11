export class categories{
    categoryId:number;
    menuName:string;
    categoryName:string;
    categoryDescription:string;
    isActive:boolean;

    constructor(categoryId:number,menuName:string,categoryName:string,categoryDescription:string,isActive:boolean){
        this.categoryId=categoryId;
        this.menuName=menuName;
        this.categoryName=categoryName;
        this.categoryDescription=categoryDescription;
        this.isActive=isActive;
    }
}
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Api } from '../service/api';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-blog-title',
  standalone:true,
  imports: [CommonModule, FormsModule],
  templateUrl: './blog-title.html',
  styleUrl: './blog-title.css',
})
export class BlogTitle {
 blogCategory:any = ['general' ,'Technology' ,'Sport' ,'Businnes' ,'Health','Education', 'Food', 'Travel']
 loader:boolean = false
 prompt:string = ""
 category:string = ""
 blogTitles:any = ""
lengthSelect:number | null = null
api = inject(Api)


selectedLength(item:any){
  this.lengthSelect = item
  this.category = item   
}


blogTitle(){
  console.log(this.prompt);
  console.log(this.category);
  
  
  this.loader = true
 console.log("Selected length:", this.category);
   console.log(this.prompt);
   const reqBody = {prompt:this.prompt,length:this.category}
  // api call
  this.api.blogTitleApi(reqBody).subscribe({
   next:(res:any)=>{
    console.log(res);
    this.blogTitles = res
    this.loader = false
    
   },
   error:(reason:any)=>{
    console.log(reason.error.error);
    alert(reason.error.error)
        this.loader = false    
   }
  })
   
}
}

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { Api } from '../service/api';
import { error } from 'console';


@Component({
  selector: 'app-article',
  standalone:true,
  imports: [CommonModule, FormsModule],
  templateUrl: './article.html',
  styleUrl: './article.css',
})
export class Article {
 articleLength:any = [
  {length:300, text:"Short (300 words )"},
  {length:900, text:"Short (900 words )"},
  {length:1200, text:"Short (1200 words )"}
]
prompt:string = ""
length:string = ""
article:any = ""
loader:boolean = false
lengthSelect:number | null = null
api = inject(Api)
ngOnInit(){

  
}



selectedLength(item:any){
  this.lengthSelect = item.length
  this.length=item.length

 
}

generateArticle(){
  this.loader = true
 console.log("Selected length:", this.length);
   console.log(this.prompt);
   const reqBody = {prompt:this.prompt,length:this.length}
  // api call
  this.api.generateArticleAPI(reqBody).subscribe({
   next:(res:any)=>{
    console.log(res);
    this.article = res
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

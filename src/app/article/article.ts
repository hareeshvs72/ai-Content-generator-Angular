import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { Api } from '../service/api';
import { MatSnackBar } from '@angular/material/snack-bar';


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

  constructor(private snackBar: MatSnackBar) { }

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
    this.article = res.output
    this.loader = false
    
   },
   error:(reason:any)=>{
    console.log(reason.error.error);
    // alert(reason.error.error)
       this.snackBar.open(reason.error.error +"!", 'Close', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: ['info-snackbar']
      });
        this.loader = false    
   }
  })
   
}


}

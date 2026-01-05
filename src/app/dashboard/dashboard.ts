import { Component, inject } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { Api } from '../service/api';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
api = inject(Api)
router = inject(Router)
Dashbord:any = []
aiUserData:any = []
 articlecount:string = ""
 blogTitlecount:string = ""
  imagegeneratedCount:string = ""
   bgremoveCount:string = ""
ngOnInit(){
  this.getAllData()
}

getAllData(){
 this.api.getAllAiData().subscribe({
next:((res:any)=>{
  console.log(res);
  this.aiUserData = res
 this.articlecount = res.filter((res:any)=>res.ai =="article").length
  this.blogTitlecount = res.filter((res:any)=>res.ai =="blogTitle").length
   this.bgremoveCount = res.filter((res:any)=>res.ai =="bgRemove").length
    this.imagegeneratedCount = res.filter((res:any)=>res.ai =="imagegenerator").length
 console.log(this.articlecount);
 console.log(this.blogTitlecount);
 console.log(this.imagegeneratedCount);
 console.log(this.bgremoveCount);
 

 
 
}),
  error:((reason:any)=>{
    console.log(reason);
    
  })
 })
}


naviagetToArticle(){
  this.router.navigateByUrl('/ai/article')
}
naviagetToBlogTitle(){
  this.router.navigateByUrl('/ai/blog-title')
}
naviagetToImageGenerator(){
  this.router.navigateByUrl('/ai/image-generate')
}
naviagetToRemoveBg(){
  console.log("inisde remove bg route");
  
  this.router.navigateByUrl('/ai/remove-background')
}


}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-title',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './blog-title.html',
  styleUrl: './blog-title.css',
})
export class BlogTitle {
 blogCategory:any = ['general' ,'Technology' ,'Sport' ,'Businnes' ,'Health','Education', 'Food', 'Travel']

lengthSelect:number | null = null

selectedLength(item:any){
  this.lengthSelect = item
 
}
}

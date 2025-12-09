import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-article',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './article.html',
  styleUrl: './article.css',
})
export class Article {
 articleLength:any = [
  {length:300, text:"Short (300 words )"},
  {length:900, text:"Short (900 words )"},
  {length:1200, text:"Short (1200 words )"}
]

lengthSelect:number | null = null

selectedLength(item:any){
  this.lengthSelect = item.length
 
}

}

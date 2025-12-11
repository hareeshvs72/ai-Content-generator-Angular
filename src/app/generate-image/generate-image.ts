import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-generate-image',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './generate-image.html',
  styleUrl: './generate-image.css',
})
export class GenerateImage {
 imageStyles:any = [
  "Realistic",
  "Anime Style",
  "3D Render",
  "Watercolor",
  "Oil Painting",
  "Cyberpunk",
  "Minimalist",
  "Cinematic"
];

lengthSelect:number | null = null

selectedLength(item:any){
  this.lengthSelect = item
 
}
}

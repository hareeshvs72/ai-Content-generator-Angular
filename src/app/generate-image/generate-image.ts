import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Api } from '../service/api';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-generate-image',
  standalone:true,
  imports: [CommonModule, FormsModule],
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
api=inject(Api)
lengthSelect:number | null = null
prompt:string = ""
 loader:boolean = false
style:any = ""
generatedImage:any = ""

  constructor(private snackBar: MatSnackBar) { }

selectedLength(item:any){
  this.lengthSelect = item
  this.style = item
  
}

textToImageGenerator(){
  if(!this.generatedImage){
  this.loader = true
console.log(this.prompt);
console.log(this.style);
const reqBody = {prompt:this.prompt,style:this.style}
this.api.imageGeneratorAPI(reqBody).subscribe({
  next:(res:any)=>{
    console.log(res);
    this.generatedImage = res.output
    this.loader = false
  },
  error:(reason:any)=>{
    console.log(reason.error);
       this.snackBar.open(reason.error.message, 'Close', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: ['info-snackbar']
      });
    this.loader = false
  }
})
}
else{
  this.generatedImage = ""
    this.loader = true
console.log(this.prompt);
console.log(this.style);
const reqBody = {prompt:this.prompt,style:this.style}
this.api.imageGeneratorAPI(reqBody).subscribe({
  next:(res:any)=>{
    console.log(res);
    this.generatedImage = res.output
    console.log(this.generatedImage);
    
    this.loader = false
  },
  error:(reason:any)=>{
    console.log(reason.error);
    this.loader = false
  }
})
}


}




}

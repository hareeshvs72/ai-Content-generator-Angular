import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Api } from '../service/api';

@Component({
  selector: 'app-remove-background',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './remove-background.html',
  styleUrl: './remove-background.css',
})
export class RemoveBackground {

  api = inject(Api)
  selectedFile:any = ""
  loader:boolean = false
  preview:any = ""
  backgroundRemoved:any = ""

getUploadFile(event: Event) {
  console.log('CHANGE EVENT FIRED');

  const input = event.target as HTMLInputElement;

  if (!input.files || input.files.length === 0) {
    alert("please add a Image")
  }
  else{

  const file = input.files[0];
  console.log('Selected file:', file);

  this.selectedFile = file;

  // preview
  
  const reader = new FileReader()
  reader.onload = ()=>{
    this.preview = reader.result
    console.log(this.preview);
    
  }
  reader.readAsDataURL(file)
}
}

 

removeBackground(){
  this.loader = true
  if(this.backgroundRemoved){
    this.backgroundRemoved = ""

  }
console.log(this.selectedFile);
const reqBody = new FormData()
reqBody.append('image',this.selectedFile)
this.api.removeBackgroundApi(reqBody).subscribe({
  next:(res:any)=>{
    console.log(res);
    this.backgroundRemoved = res
    console.log(this.backgroundRemoved);
    
    this.loader = false
  },
  error:(reason:any)=>{
    console.log(reason.error);
    alert(reason.error)
    this.loader = false
  }
})

}
}

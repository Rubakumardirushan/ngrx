import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators, NgModel, ReactiveFormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';

import { PostService } from '../post.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-create',
  standalone: true,
  imports: [RouterLink,CommonModule,ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent implements OnInit {

form!:FormGroup;

constructor(public postservice:PostService, private router:Router){}
ngOnInit(): void {
    this.form=new FormGroup({
      title: new FormControl('',[Validators.required]),
      body: new FormControl('',[Validators.required])
    })
}


get f(){

return this.form.controls

}
submit(){
  console.log(this.form.value);
  this.postservice.create(this.form.value).subscribe(res=>{
    console.log('Post created successfully!');
    this.router.navigateByUrl('post/index');
  })
}

}






































































import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Post } from '../post';
import { FormGroup } from '@angular/forms';
import { PostService } from '../post.service';
import {  ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent implements OnInit{
id!:number;
post!:Post;
form!:FormGroup;
 constructor(public postservice :PostService, private router:Router,private route:ActivatedRoute) { }

 ngOnInit(): void {

  this.id=this.route.snapshot.params['postId'];
  this.postservice.find(this.id).subscribe((data:Post)=>{
    this.post=data;
  });
  this.form=new FormGroup({
    title: new FormControl('',Validators.required),
    body: new FormControl('',Validators.required)
  });
 }

get f(){
  return this.form.controls;

}

submit(){
this.postservice.update(this.id,this.form.value).subscribe((res:any)=>{

  console.log('Post updated successfully!');
  this.router.navigateByUrl('post/index');
})


}




}

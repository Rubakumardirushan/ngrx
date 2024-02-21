import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { ActivatedRoute ,Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent implements OnInit{
  id!:number;
  posts:Post[] = [];

constructor(public postservice :PostService ,private router:Router,private route:ActivatedRoute ){}


ngOnInit(): void {
  this.postservice.getall().subscribe((data:Post[])=>{
    this.posts=data;
    console.log(this.posts);
  })


}













}

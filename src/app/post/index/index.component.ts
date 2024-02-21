import { Component } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule,RouterLink,],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent implements OnInit{

  posts:Post[] = [];
  constructor(public postService:PostService) { }
  ngOnInit(): void {
      this.postService.getall().subscribe((data:Post[])=>{
        this.posts=data;
        console.log(this.posts);
      })
  }

deletePost(id:number){

  this.postService.delete(id).subscribe(res=>{
    this.posts= this.posts.filter(item=>item.id !== id);
    console.log('Post deleted successfully!');
  })
}




}

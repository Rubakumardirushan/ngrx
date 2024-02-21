import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-counterdisplay',
  standalone: true,
  imports: [],
  templateUrl: './counterdisplay.component.html',
  styleUrl: './counterdisplay.component.scss'
})
export class CounterdisplayComponent implements OnInit{
 constructor(private store: Store<{counter:{counter:number} }>){

 }
 countervalue!: number;
ngOnInit(): void {
    this.store.select('counter').subscribe((data)=>{
      this.countervalue = data.counter;
    })

}
}

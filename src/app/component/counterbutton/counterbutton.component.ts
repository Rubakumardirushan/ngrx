import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { increment,decrement,reset } from '../../shared/store/counter.actions';
@Component({
  selector: 'app-counterbutton',
  standalone: true,
  imports: [],
  templateUrl: './counterbutton.component.html',
  styleUrl: './counterbutton.component.scss'
})
export class CounterbuttonComponent {
constructor(private store: Store<{counter:{counter:number} }>) {}
onincreament(){
this.store.dispatch(increment());
}

ondecreament(){
this.store.dispatch(decrement());

}

onreset(){
this.store.dispatch(reset());
}
}

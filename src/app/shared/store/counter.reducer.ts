import { createReducer, on } from '@ngrx/store';
import{counterState} from './counter.state';
import { initialState } from './counter.state';
import { State } from './counter.state';
import{increment,decrement,reset,addcustomer} from './counter.actions';
import { state } from '@angular/animations';
const _counterReducer = createReducer(counterState,on(increment,(state)=>{
  return{...state,counter:state.counter+1}

},




),
on(decrement,(state)=>{
  return{...state,counter:state.counter-1}

},
),
on(reset,(state)=>{
  return{...state,counter:0}

},
),



);

export const  reducer= createReducer(
  initialState,on(addcustomer,(state1:State,{customer})=>(

    {
      ...state1,customers:[...state1.customers,customer]
    }
  )

  )

);







export function counterReducer (state:any,action:any){

  return _counterReducer(state, action);
}




import { createAction } from '@ngrx/store';
import { Customer } from '../../models/customer';
export const increment= createAction("Increment");
export const decrement= createAction("decrement");
export const reset= createAction("reset");

export const addcustomer= createAction("addcustomer",(customer:Customer)=>({customer}));

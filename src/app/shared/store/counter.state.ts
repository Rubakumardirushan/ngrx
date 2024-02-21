import { Customer } from "../../models/customer"
export const counterState = {
  counter: 0

}
export interface State{
  customers:Customer[]
}

export const initialState: State = {
  customers: []
};

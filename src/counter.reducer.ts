import { createReducer, on } from "@ngrx/store";
import { increment,decrement } from "./couter.action";

export const initialState = 0;

export const countReducer = createReducer(
    initialState,

    on(increment,(state)=> state + 1),
    on(decrement, (state)=> state -1)
)
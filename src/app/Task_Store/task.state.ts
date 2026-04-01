import { Task } from "../Models/tasks.model";

export interface taskState {
    tasks:Task[];
}

export const initialState:taskState = {
    tasks:[]
}
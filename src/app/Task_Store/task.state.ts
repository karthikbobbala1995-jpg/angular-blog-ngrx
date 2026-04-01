import { Task } from "../Models/tasks.model";

export interface taskState {
    tasks:Task[];
}

export const initialState:taskState = {
    tasks:[
     {
      id: '1', // unique ID
      description: 'Welcome! This is your first task',
      completed: false
    }
    ]
}
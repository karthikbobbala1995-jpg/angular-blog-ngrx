import { createAction, props } from "@ngrx/store";
import { Task } from "../Models/tasks.model";

export const addTask = createAction('[Task Page] Add Task',props<{task: Task}>())

export const removeTask = createAction('[Task Page] Remove Task',props<{taskId:string}>())

export const toggleTask = createAction('[Task Page] Toggle Task',props<{taskId:string}>())
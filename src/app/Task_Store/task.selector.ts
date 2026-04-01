import { createFeatureSelector, createSelector } from "@ngrx/store";
import { taskState } from "./task.state";

export const selectTaskState = createFeatureSelector<taskState>('tasks');

export const selectAllTasks = createSelector(
    selectTaskState,
    (state:taskState) => state.tasks
)

export const selectIncompleteTaskCount = createSelector(
    selectAllTasks,
    tasks => tasks.filter(t => !t.completed ).length
)
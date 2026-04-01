import { createReducer, on } from "@ngrx/store";
import { initialState } from "./task.state";
import { addTask, removeTask, toggleTask } from "./task.action";

export const taskReducer = createReducer(
    initialState,

    on(addTask, (state,{task})=> {
        return {
            ...state,
            tasks:[...state.tasks,task]
        }
    }),

    on(removeTask,(state,{taskId})=>{
        return {
            ...state,
            tasks:state.tasks.filter(task => task.id !== taskId)
        }
    }),

  on(toggleTask, (state, { taskId }) => {
  return {
    ...state,
    tasks: state.tasks.map(task =>
      task.id === taskId
        ? { ...task, completed: !task.completed }
        : task
    )
  };
})
)
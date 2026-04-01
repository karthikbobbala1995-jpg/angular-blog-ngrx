import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../Models/tasks.model';
import { Store } from '@ngrx/store';
import { selectAllTasks, selectIncompleteTaskCount } from '../../Task_Store/task.selector';
import { addTask, removeTask, toggleTask } from '../../Task_Store/task.action';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule,AsyncPipe,FormsModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks implements OnInit {

  newTaskDescription = '';
  allTasks$ : Observable<Task[]>;
  incompleteTasks$ : Observable<number>;

  constructor(private store: Store) {
    this.allTasks$ = this.store.select(selectAllTasks);
    this.incompleteTasks$ = this.store.select(selectIncompleteTaskCount)
  }

  ngOnInit(): void {
    console.log('This all Tasks', this.allTasks$.subscribe((res:any)=> console.log(res)))
  }

  addTask(){
    const newTask:Task = {
      id:Date.now().toString(),
      description: this.newTaskDescription,
      completed: false
    }
    this.store.dispatch(addTask({task:newTask}))
    this.newTaskDescription = ''
  }
  removeTask(taskId:string) {
    this.store.dispatch(removeTask({taskId}))
  }
  toggleCompletion(taskId:string) {
    this.store.dispatch(toggleTask({taskId}))
  }
}

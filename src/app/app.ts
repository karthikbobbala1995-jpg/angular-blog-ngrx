import { AsyncPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment } from '../couter.action';
import { Tasks } from './Components/tasks/tasks';
import { Blogs } from "./Components/blogs/blogs";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncPipe, Tasks, Blogs],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_ngrx');

  count$:Observable<number>;
    constructor(private store: Store<{ count: number }>) {
    this.count$ = this.store.select('count');
  }

   inc() {
    this.store.dispatch(increment());
  }

  dec() {
    this.store.dispatch(decrement());
  }
}

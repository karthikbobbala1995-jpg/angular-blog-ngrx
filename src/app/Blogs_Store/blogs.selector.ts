import { createFeatureSelector, createSelector } from '@ngrx/store';
import { blogsState } from './blogs.state';

export const selectBlogState = createFeatureSelector<blogsState>('blogs');

export const selectBlogs = createSelector(
  selectBlogState,
  (state) => state.blogs
);
import { createAction,props } from "@ngrx/store";
import { Blog } from "../Models/blogs.model";

export const addBlog = createAction('[Blog] Add Blog Page',props<{blog:Blog}>());
export const updateBlog = createAction('[Blog] Update Blog',props<{blog:Blog}>());
export const deleteBlog = createAction('[Blog] Delete Blog',props<{id:string}>())
export const loadBlogs = createAction('[Blog] load Blogs');
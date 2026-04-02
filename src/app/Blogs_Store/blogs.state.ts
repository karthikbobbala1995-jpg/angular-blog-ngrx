import { Blog } from "../Models/blogs.model"

export interface blogsState {
    blogs:Blog[]
}
export interface AppState {
  blogs: blogsState;
}
export const initialState:blogsState =  {
  blogs:[]
}
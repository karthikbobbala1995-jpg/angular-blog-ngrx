import { createReducer, on } from "@ngrx/store";
import { initialState } from "./blogs.state";
import { addBlog, deleteBlog, loadBlogs, updateBlog } from "./blogs.actions";


export const blogsReducer = createReducer(
   initialState,

    on(addBlog,(state,{blog})=> {
        return {
            ...state,
            blogs:[...state.blogs,blog]
        }
    }),
    
    on(updateBlog,(state,{blog})=>{
        return {
            ...state,
             blogs: state.blogs.map(b =>
              b.id === blog.id ? blog : b
         )
        }
        
    }),

    on(deleteBlog,(state,{id})=>{
         return {
            ...state,
            blogs:state.blogs.filter(b => b.id != id)
         }
    }),

    on(loadBlogs,(state)=>{
        return {
            ...state,
             blogs: [
                {
                    id:'1',
                    title:'Mastering React 18 Hooks',
                    description:'Dive deep into useState, useEffect, and custom hooks to build scalable React applications.',
                    author:'Bob Smith'
                }
  ]
        }
    })
)
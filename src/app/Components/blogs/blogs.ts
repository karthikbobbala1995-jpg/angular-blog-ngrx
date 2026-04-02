import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectBlogs } from '../../Blogs_Store/blogs.selector';
import { blogsState } from '../../Blogs_Store/blogs.state';
import { Blog } from '../../Models/blogs.model';
import { AsyncPipe } from '@angular/common';
import { addBlog, deleteBlog, loadBlogs, updateBlog } from '../../Blogs_Store/blogs.actions';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent, FontAwesomeModule } from "@fortawesome/angular-fontawesome";


@Component({
  selector: 'app-blogs',
  imports: [ReactiveFormsModule, AsyncPipe, FaIconComponent,FontAwesomeModule],
  templateUrl: './blogs.html',
  styleUrl: './blogs.css',
})
export class Blogs implements OnInit {
  faPen = faEdit
  faDelete = faTrash;

  blogs$!: Observable<Blog[]>;
  blogForm!: FormGroup;
  selectedBlogId:string | null = null

  fb = inject(FormBuilder);
  buttonText:string = "Add Blog";

  constructor(private store: Store<blogsState>) {
      this.blogs$ = this.store.select(selectBlogs);
  }
  ngOnInit(): void {
     this.initlizeFormControld();
     this.store.dispatch(loadBlogs())
  }
  private initlizeFormControld() {
    this.blogForm = this.fb.group({
      title:['',Validators.required],
      description:['',Validators.required],
      author:['',Validators.required]
    })
  }
  handleSubmit(event: any) {
  const payload = {
    id:this.selectedBlogId ?? Date.now().toString(),
    title: this.blogForm.value.title.trim(),
    description: this.blogForm.value.description.trim(),
    author: this.blogForm.value.author.trim()
  }
   console.log('payload',payload)
   if(this.selectedBlogId){
    this.store.dispatch(updateBlog({blog:payload}));
    this.blogForm.reset();
   } else {
   this.store.dispatch(addBlog({blog:payload}));
       this.blogForm.reset();
   }
  }
  handleEdit(item:any){
    this.buttonText = "Update Blog"
    this.selectedBlogId = item.id
    this.blogForm.patchValue(item)
  }
  handleDelete(item:any) {
    const confirm = window.confirm('Are u sure you want to delete this blog');
    if(confirm){
     this.store.dispatch(deleteBlog(item.id))
    }
  }
}

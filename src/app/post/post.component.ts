import { Component, OnInit } from '@angular/core'
import { post } from '../models/post'
import { postService } from '../service/post.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: post = {} as post
  posts: post[]
  receber: any

  exibirComentario: boolean = false

  constructor(private service: postService) { }

  async ngOnInit() {
    this.receber = await this.service.get()
    this.posts = this.receber
  }

  //async onSubmit() {
    //await this.service.post(form)
  //}

}
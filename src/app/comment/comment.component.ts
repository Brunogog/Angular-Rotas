import { Component, OnInit } from '@angular/core'
import { comment } from '../models/comment'
import { commentService } from '../service/comment.service'

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comment: comment
  comments: comment[]
  receber: any

  constructor(private service: commentService) { }

  async ngOnInit() {
    this.receber = await this.service.get()
    this.comments = this.receber
  }

}
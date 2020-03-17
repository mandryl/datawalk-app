import { Component, Input } from '@angular/core';

@Component({
  selector: 'dw-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  @Input() public post: any = {};

}

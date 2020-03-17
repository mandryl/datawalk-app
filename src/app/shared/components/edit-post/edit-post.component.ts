import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'dw-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent {

  constructor(
    private matDialogRef: MatDialogRef<EditPostComponent>,
  ) { }

  public close() {
    this.matDialogRef.close();
  }

}

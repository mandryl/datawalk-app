import { Component, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from '../../services/users.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'dw-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnDestroy {

  public postTitle: string;
  public postBody: string;
  private postId: number;

  private unsubscriber: Subject<void> = new Subject<void>();

  constructor(
    private matDialogRef: MatDialogRef<EditPostComponent>,
    private usersService: UsersService,
    @Inject(MAT_DIALOG_DATA) data: any,
  ) {
    this.postTitle = data.title;
    this.postBody = data.body;
    this.postId = data.id;
  }

  public ngOnDestroy() {
    this.unsubscriber.next();
  }

  public close(result?: any) {
    this.matDialogRef.close(result);
  }

  public confirm() {
    this.usersService.editPost(this.postId, this.postTitle, this.postBody).pipe(
      takeUntil(this.unsubscriber),
    ).subscribe((result) => this.close(result));
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, takeUntil, flatMap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditPostComponent } from 'src/app/shared/components/edit-post/edit-post.component';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'dw-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent implements OnInit, OnDestroy {

  public posts: any[] = [];

  private unsubscriber: Subject<void> = new Subject<void>();
  private matDialogRef: MatDialogRef<EditPostComponent>;

  constructor(
    private matDialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService,
  ) {}

  public trackByPostId(_: number, item: any) {
    if (!item) {
      return null;
    }
    return item.id;
  }

  public ngOnInit() {
    this.activatedRoute.params.pipe(
      takeUntil(this.unsubscriber),
      flatMap((params: any) => {
        this.usersService.fetchUserPosts(params.userid);
        return this.usersService.getUserPostsFromStore(params.userid).pipe(
          map(result => result.userPosts),
        );
      })
    ).subscribe((userPosts: any[]) => this.posts = userPosts);
  }

  public ngOnDestroy() {
    this.unsubscriber.next();
  }

  public openPostEditModal(post: any) {
    const config: MatDialogConfig = {
      width: '450px',
      height: '350px',
    };
    this.matDialogRef = this.matDialog.open(EditPostComponent, config);
    this.matDialogRef.beforeClosed().pipe(takeUntil(this.unsubscriber)).subscribe();
  }

}

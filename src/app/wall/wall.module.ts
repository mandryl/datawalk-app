import { NgModule } from '@angular/core';
import { WallComponent } from './wall/wall.component';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [ WallComponent, PostComponent ],
  imports: [
    CommonModule,
    MatDialogModule,
  ],
  exports: [
    CommonModule,
  ],
})
export class WallModule { }

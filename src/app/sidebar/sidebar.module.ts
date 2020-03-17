import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    SidebarComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
  ],
})
export class SidebarModule { }

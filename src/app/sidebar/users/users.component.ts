import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'dw-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: any[] = [];

  constructor(
    private router: Router,
    private usersService: UsersService,
  ) { }

  public ngOnInit(): void {
    this.usersService.fetchUsers();
    this.usersService.getUsersFromStore().subscribe((storedUsers: any) => {
      this.users = storedUsers.users;
    });
  }

  public userClicked(userId: number) {
    this.router.navigateByUrl(`/users(wall:/users/${userId}/posts)`);
  }
}

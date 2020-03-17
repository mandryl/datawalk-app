import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'dw-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'datawalk-app';

  constructor(private router: Router) {}

  public showUserList(): void {
    this.router.navigateByUrl('/users');
  }
}

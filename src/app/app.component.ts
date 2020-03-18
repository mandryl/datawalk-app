import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

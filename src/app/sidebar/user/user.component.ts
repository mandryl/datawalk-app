import { Component, Input } from '@angular/core';

@Component({
  selector: 'dw-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  @Input() public user: any;

}

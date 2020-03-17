import { Component, Input } from '@angular/core';

@Component({
  selector: 'dw-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  @Input() public users: any[] = [];

}

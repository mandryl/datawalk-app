import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { WallComponent } from './wall/wall/wall.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'users/:userid/posts',
    pathMatch: 'full',
    component: WallComponent,
    outlet: 'wall',
  },
  {
    path: 'users',
    pathMatch: 'full',
    component: SidebarComponent,
    outlet: 'primary',
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes,
      {
        useHash: true,
        preloadingStrategy: PreloadAllModules,
      },
    ),
  ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SidebarModule } from './sidebar/sidebar.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { WallModule } from './wall/wall.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { EditPostComponent } from './shared/components/edit-post/edit-post.component';
import { effects } from './effects';
import { reducers, metaReducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    WallModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

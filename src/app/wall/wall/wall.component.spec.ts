import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallComponent } from './wall.component';
import { PostComponent } from '../post/post.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UsersService } from 'src/app/shared/services/users.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';

class MockMatDialog {
  public open() {
    return {
      afterClosed: () => of({ title: 'test title', body: 'test'})
    }
  }
}

class MockActivatedRoute {
  public params = of({ userid: '1' });
}

describe('WallComponent', () => {
  let component: WallComponent;
  let fixture: ComponentFixture<WallComponent>;
  const initialState = { userPosts: [] };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      declarations: [
        WallComponent,
        PostComponent,
      ],
      providers: [
        { provide: MatDialog, useClass: MockMatDialog },
        UsersService,
        provideMockStore({ initialState }),
        { provide: ActivatedRoute, useClass: MockActivatedRoute },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

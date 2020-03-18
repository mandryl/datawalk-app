import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    component.post = {
      id: 76,
      userId: 67,
      title: 'Test title',
      body: 'Test body',
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should contain correct title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.post-title').textContent).toContain('Test title');
  });
  
  it('should contain correct body', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.post-content').textContent).toContain('Test body');
  });
});

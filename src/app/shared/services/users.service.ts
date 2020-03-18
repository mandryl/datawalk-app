import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, getUserPostsState, getUserState } from 'src/app/reducers';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as userActions from '../../actions/user.actions';
import * as userPostsActions from '../../actions/user-posts.actions';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public users: Observable<any[]>;

  constructor(
    private http: HttpClient,
    private store: Store<AppState>,
  ) {}

  public fetchUsers() {
    this.store.dispatch(new userActions.GetUsersBegin());
  }

  public getUsersFromStore() {
    return this.store.select(getUserState);
  }

  public getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  public fetchUserPosts(userId: number) {
    this.store.dispatch(new userPostsActions.GetUserPostsBegin(userId));
  }

  public getUserPosts(userId: number) {
    console.log(userId);
    return this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  }

  public getUserPostsFromStore(userId: number) {
    return this.store.select(getUserPostsState, { userId });
  }

  public editPost(postId: number, postTitle: string, postBody: string) {
    const options: any = {
      title: postTitle,
      body: postBody,
      id: postId,
      userId: 1,
    };
    const headers = new HttpHeaders().append('Content-type', 'application/json; charset=UTF-8');
    return this.http.patch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      JSON.stringify(options),
      { headers },
    ).pipe(
      map((result) => {
        console.log(result);
        return result;
      }),
    );
  }
}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { UsersService } from '../shared/services/users.service';
import { mergeMap, map, catchError, shareReplay } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import * as userActions from '../actions/user.actions';
import * as userPostsActions from '../actions/user-posts.actions';

@Injectable({
  providedIn: 'root',
})
export class UserEffects {

  @Effect()
  public getUsers: Observable<any> = createEffect(() => {
    return this.actions.pipe(
      ofType(userActions.GetUsersActionTypes.GetUsersBegin),
      mergeMap(() => {
        return this.usersService.getUsers().pipe(
          map(users => ({ type: userActions.GetUsersActionTypes.GetUsersSuccess, payload: users })),
          catchError(() => EMPTY),
        );
      }),
      shareReplay(1), // for some reason the subscription is fired twice, this operator fixes the issue
    );
  });

  @Effect()
  public getUserPosts = createEffect(() => {
    return this.actions.pipe(
      ofType(userPostsActions.GetUserPostsActionTypes.GetUserPostsBegin),
      mergeMap((param: { userId: number, type: userPostsActions.GetUserPostsActionTypes.GetUserPostsBegin}) => {
        return this.usersService.getUserPosts(param.userId).pipe(
          map(users => ({ type: userPostsActions.GetUserPostsActionTypes.GetUserPostsSuccess, payload: users })),
          catchError(() => EMPTY),
        );
      }),
      shareReplay(1),
    );
  });

  constructor(
    private actions: Actions,
    private usersService: UsersService
  ) {}
}

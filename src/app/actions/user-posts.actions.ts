import { Action } from '@ngrx/store';

export enum GetUserPostsActionTypes {
  GetUserPostsBegin = '[Users Service] Get user posts begin',
  GetUserPostsSuccess = '[Users Service] Get user posts success',
  GetUserPostsFailure = '[Users Service] Get user posts failure',
}

export class GetUserPostsBegin implements Action {
  public readonly type = GetUserPostsActionTypes.GetUserPostsBegin;

  constructor(public userId: number) {}
}

export class GetUserPostsSuccess implements Action {
  public readonly type = GetUserPostsActionTypes.GetUserPostsSuccess;

  constructor(public payload: any[]) {}
}

export class GetUserPostsFailure implements Action {
  public readonly type = GetUserPostsActionTypes.GetUserPostsFailure;

  constructor(public payload: { error: any }) {}
}

export type GetUsersIntersectionType = GetUserPostsBegin & GetUserPostsSuccess & GetUserPostsFailure;

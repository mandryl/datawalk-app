import { Action } from '@ngrx/store';

export enum GetUsersActionTypes {
  GetUsersBegin = '[Users Service] Get users begin',
  GetUsersSuccess = '[Users Service] Get users success',
  GetUsersFailure = '[Users Service] Get users failure',
}

export enum EditPostActionTypes {
  EditPostBegin = '[Users Service] Edit post begin',
  EditPostSuccess = '[Users Service] Edit post success',
  EditPostFailure = '[Users Service] Edit post failure',
}

export class GetUsersBegin implements Action {
  public readonly type = GetUsersActionTypes.GetUsersBegin;
}

export class GetUsersSuccess implements Action {
  public readonly type = GetUsersActionTypes.GetUsersSuccess;

  constructor(public payload: any[]) {}
}

export class GetUsersFailure implements Action {
  public readonly type = GetUsersActionTypes.GetUsersFailure;

  constructor(public payload: { error: any }) {}
}

export type GetUsersIntersectionType = GetUsersBegin & GetUsersSuccess & GetUsersFailure;

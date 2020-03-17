import {
  ActionReducerMap,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import * as userReducer from './user.reducer';
import * as userPostsReducer from './user-posts.reducer';

export interface AppState {
  users: userReducer.UserState;
  userPosts: userPostsReducer.UserPostsState;
}

export const reducers: ActionReducerMap<AppState> = {
  users: userReducer.reducer,
  userPosts: userPostsReducer.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = [];

export const getUserState = (state: AppState) => {
  return state.users;
};

export const getUserPostsState = (state: AppState) => {
  return state.userPosts;
};

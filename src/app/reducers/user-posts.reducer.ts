import * as userPostsActions from '../actions/user-posts.actions';

export interface UserPostsState {
  userPosts: any[];
  loading: boolean;
  error: any;
}

export const initialDataState: UserPostsState = {
  userPosts: [],
  loading: false,
  error: null,
};

export function reducer(
  state = initialDataState,
  action: userPostsActions.GetUsersIntersectionType,
): UserPostsState {
  switch (action.type) {
    case userPostsActions.GetUserPostsActionTypes.GetUserPostsBegin:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case userPostsActions.GetUserPostsActionTypes.GetUserPostsSuccess:
      return {
        ...state,
        loading: false,
        userPosts: action.payload,
        error: null,
      };
    case userPostsActions.GetUserPostsActionTypes.GetUserPostsFailure:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}

export const getUsers = (state: UserPostsState) => {
  return state.userPosts;
};

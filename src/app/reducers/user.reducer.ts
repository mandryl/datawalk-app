import * as userActions from '../actions/user.actions';

export interface UserState {
  users: any[];
  loading: boolean;
  error: any;
}

export const initialDataState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export function reducer(
  state = initialDataState,
  action: userActions.GetUsersIntersectionType,
): UserState {
  switch (action.type) {
    case userActions.GetUsersActionTypes.GetUsersBegin:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case userActions.GetUsersActionTypes.GetUsersSuccess:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: null,
      };
    case userActions.GetUsersActionTypes.GetUsersFailure:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}

export const getUsers = (state: UserState) => {
  return state.users;
};

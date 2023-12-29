import { configureStore } from '@reduxjs/toolkit';
/** Reducers */
import profileReducer from './redux/profileReducer';
import tokenReducer from 'src/redux/tokenReducer';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    token: tokenReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

import { configureStore } from '@reduxjs/toolkit';
import type { ThunkAction, UnknownAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

/** Reducers */
import profileReducer from './redux/profileReducer';
import tokenReducer from 'src/redux/tokenReducer';
import cartReducer from './redux/cartReducer';
import { initialized } from './redux/initializer/initializeReducer';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    token: tokenReducer,
    cart: cartReducer,
    initialize: initialized,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Дополнительные типы, чтобы можно было диспатчить Thunk`и
// https://github.com/reduxjs/redux-toolkit/issues/587#issuecomment-1049488808
export type TypedDispatch = ThunkDispatch<RootState, any, UnknownAction>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, UnknownAction>;

export const useTypedDispatch = () => useDispatch<TypedDispatch>();

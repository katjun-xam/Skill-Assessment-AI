import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { pokemonApi } from './api/pokemon/api';
import transactionsReducer from 'store/transactions/slice';
import userReducer from 'store/user/slice';
import applicationsReducer from 'store/applications/slice';
import registerReducer from 'store/register/slice';

// global store
export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    user: userReducer,
    register: registerReducer,
    applications: applicationsReducer,
    // for api queries/mutations
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
});

// types
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

// hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

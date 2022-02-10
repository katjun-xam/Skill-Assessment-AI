import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
// Inject reducers
import counterReducer from "../features/counter/counterSlice";
import transactionsReducer from "../features/transactions/transactionsSlice";
import userReducer from "./../features/user/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    transactions: transactionsReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

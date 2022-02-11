import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
// Inject reducers
import counterReducer from "../features/counter/counterSlice";
import transactionsReducer from "../features/transactions/transactionsSlice";
import userReducer from "./../features/user/userSlice";
import applicationsReducer from "../features/applications/applicationsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    transactions: transactionsReducer,
    user: userReducer,
    applications: applicationsReducer,
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

import { cryptoNewsApi } from './../services/cryptoNewsApi';
import { cryptoApi } from './../services/cryptoApi';
import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: {
		[cryptoApi.reducerPath]: cryptoApi.reducer,
		[cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			immutableCheck: { ignoredPaths: ['some.nested.path'] },
			serializableCheck: { ignoredPaths: ['some.nested.path'] },
		}).concat(cryptoApi.middleware, cryptoNewsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

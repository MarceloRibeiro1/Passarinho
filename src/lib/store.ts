import { configureStore } from "@reduxjs/toolkit";
import user from "../reducers/user";
import tweet from "../reducers/tweet";

export const store = configureStore({
	reducer: {
		user,
		tweet,
	},
});

export type RootState = ReturnType<typeof store.getState>;

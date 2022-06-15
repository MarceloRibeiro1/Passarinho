import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../lib/store";
import { UserModel } from "../../models";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		user: {
			username: undefined,
			email: undefined,
			userId: undefined,
			accountId: undefined,
			auth_token: undefined,
			loggedIn: false,
		} as UserModel,
	},
	reducers: {
		login: (state, action) => {
			state.user = action.payload;
		},
		logout: (state) => {
			state.user = {
				username: undefined,
				email: undefined,
				userId: undefined,
				accountId: undefined,
				auth_token: undefined,
				loggedIn: false,
			} as UserModel;
		},
	},
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;

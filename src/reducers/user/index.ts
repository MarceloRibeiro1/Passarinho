import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../lib/store";
import { UserModel } from "../../models";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		user: {} as UserModel,
	},
	reducers: {
		login: (state, action) => {
			state.user = action.payload;
		},
		logout: (state) => {
			state.user = {} as UserModel;
		},
	},
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;

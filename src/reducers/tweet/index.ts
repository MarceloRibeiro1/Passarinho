import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../lib/store";
import { TweetPostInfo } from "../../models";

export const tweetSlice = createSlice({
	name: "tweet",
	initialState: {
		tweet: {} as TweetPostInfo,
	},
	reducers: {
		select: (state, action) => {
			state.tweet = { ...action.payload, isOpen: true };
		},
		back: (state) => {
			state.tweet = {} as TweetPostInfo;
			state.tweet.isOpen = false;
		},
		newComment: (state) => {
			state.tweet = { ...state.tweet, comments: state.tweet.comments + 1 };
		},
	},
});

export const { select, back, newComment } = tweetSlice.actions;

export const selecttweet = (state: RootState) => state.tweet.tweet;

export default tweetSlice.reducer;

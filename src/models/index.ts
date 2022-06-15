export interface TweetPostsModel {
	content: string;
	image?: string;
	authorId: string;
	authorProfile: string;
	username?: string;
}

export interface TweetPostInfo {
	id: number;
	content: string;
	likes: number;
	comments: number;
	image: string | null;
	createdAt: Date;
	responseTo: number | null;
	username: string;
	name: string;
	userPhoto: string;
	isOpen?: boolean;
}

export interface UserModel {
	username?: string;
	email?: string;
	userId?: string;
	accountId?: string;
	auth_token?: TokenData;
	loggedIn: boolean;
}

export interface TokenData {
	token: string;
	expiresIn: number;
}

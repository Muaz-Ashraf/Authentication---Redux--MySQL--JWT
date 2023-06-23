import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";

const initialState = {
	token: null,
	isAuthenticated: false,
	userRole: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		user: (state, action) => {
			state.userRole = action.payload.user.role;
		},
		login: (state, { payload }) => {
			state.token = payload;
			state.isAuthenticated = true;
		},
		logout: (state) => {
			state.token = null;
			state.isAuthenticated = false;
		},
	},
});

const encryptor = encryptTransform({
	secretKey: "scm",
	onError: function (error) {
		console.log(error);
	},
});

const persistConfig = {
	key: "auth",
	storage: storage,
	transforms: [encryptor],
};

const persistedAuthReducer = persistReducer(persistConfig, authSlice.reducer);

export const { login, logout, user } = authSlice.actions;
export default persistedAuthReducer;

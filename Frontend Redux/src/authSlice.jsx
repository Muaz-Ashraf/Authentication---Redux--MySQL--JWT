import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const initialState = {
	token: null,
	isAuthenticated: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setToken: (state, action) => {
			state.token = action.payload;
			state.isAuthenticated = true;
		},
		clearToken: (state) => {
			state.token = null;
			state.isAuthenticated = false;
		},
	},
});

const persistConfig = {
	key: "root",
	storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authSlice.reducer);

export const { setToken, clearToken } = authSlice.actions;
export default persistedAuthReducer;

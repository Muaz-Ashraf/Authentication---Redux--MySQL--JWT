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
		},
		clearToken: (state) => {
			state.token = null;
		},
		setAuthenticated: (state) => {
			state.isAuthenticated = true;
		},
		clearAuthenticated: (state) => {
			state.isAuthenticated = false;
		},
	},
});

export const { setToken, clearToken, setAuthenticated, clearAuthenticated } =
	authSlice.actions;

const persistConfig = {
	key: "root",
	storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authSlice.reducer);

export default persistedAuthReducer;

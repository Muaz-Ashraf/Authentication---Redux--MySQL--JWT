import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";

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

// Encryption configuration
const encryptor = encryptTransform({
	secretKey: "scm", // Replace with your own secret key
	onError: function (error) {
		// Handle encryption errors
		console.log(error);
	},
});

// Redux persist configuration
const persistConfig = {
	key: "auth",
	storage: storage,
	transforms: [encryptor], // Apply the encryption transform
};

const persistedAuthReducer = persistReducer(persistConfig, authSlice.reducer);

export const { setToken, clearToken, setAuthenticated, clearAuthenticated } =
	authSlice.actions;
export default persistedAuthReducer;

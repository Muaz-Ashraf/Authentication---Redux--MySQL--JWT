import { createSlice } from "@reduxjs/toolkit";

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
export default authSlice.reducer;

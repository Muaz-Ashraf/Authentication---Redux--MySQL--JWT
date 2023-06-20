import { configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import persistedAuthReducer from "./authSlice";

const store = configureStore({
	reducer: {
		auth: persistedAuthReducer,
	},
});

export default store;
export const persistor = persistStore(store);

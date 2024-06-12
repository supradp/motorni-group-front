import { configureStore } from "@reduxjs/toolkit";
import { motorniAPI } from "../services/motorniAPI";
import { noLoadingReqAPI } from "../services/noLoadingReqAPI";
import statusReducer from "../slices/statusSlice";

export const store = configureStore({
    reducer: {
        [motorniAPI.reducerPath]: motorniAPI.reducer,
        [noLoadingReqAPI.reducerPath]: noLoadingReqAPI.reducer,
        status: statusReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(motorniAPI.middleware, noLoadingReqAPI.middleware),
});

// setupListeners(store.dispatch);

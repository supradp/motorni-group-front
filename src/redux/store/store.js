import { configureStore } from "@reduxjs/toolkit";
import { motorniAPI } from "../services/motorniAPI";
import { noLoadingReqAPI } from "../services/noLoadingReqAPI";

export const store = configureStore({
    reducer: {
        [motorniAPI.reducerPath]: motorniAPI.reducer,
        [noLoadingReqAPI.reducerPath]: noLoadingReqAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(motorniAPI.middleware, noLoadingReqAPI.middleware),
});

// setupListeners(store.dispatch);

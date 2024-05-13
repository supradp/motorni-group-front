import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, onQueryStartedErrorToast } from "./motorniAPI";

// const onQueryStartedErrorToast = async (args, { queryFulfilled }) => {
//     try {
//         await queryFulfilled;
//     } catch (error) {
//         console.log(error);
//     }
// };

export const noLoadingReqAPI = createApi({
    reducerPath: "noLoadingReqAPI",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getPageUnload: builder.query({
            query: (url) => ({ url: "api/" + url, method: "get" }),
            onQueryStarted: onQueryStartedErrorToast,
        }),
    }),
});

export const { useGetPageUnloadQuery } = noLoadingReqAPI;

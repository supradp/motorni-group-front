import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseUrl =
    !process.env.NODE_ENV || process.env.NODE_ENV === "development" ? `https://booking.inshi-apartments.com/` : `/`;

export const onQueryStartedErrorToast = async (args, { queryFulfilled }) => {
    try {
        await queryFulfilled;
    } catch (error) {
        const message = error?.error?.data?.message;
        const errorStatus = error.error.status;

        if (errorStatus === 403) {
            alert(message?.length ? message : "Ви не авторизовані!");
        } else if (errorStatus === 500) {
            alert(message?.length ? message : "Помилка сервера");
        } else if (errorStatus === 422) {
            if (!message.includes("guests")) {
                alert(message?.length ? message : "Некоректно заповнені данні");
            } else if (!message.includes("dates")) {
                alert(message?.length ? message : "Некоректно заповнені данні");
            }
        } else if (errorStatus === 401) {
            alert(message?.length ? message : "Unauthorized");
        } else if (errorStatus === 404) {
            alert(message?.length ? message : "404 Error");
        } else if (errorStatus === 400) {
            alert(message?.length ? message : "400 Error");
        }
    }
};

export const motorniAPI = createApi({
    reducerPath: "motorniAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        headers: { "Content-Type": "application/json", Accept: "application/json" },
    }),
    endpoints: (builder) => ({
        getPage: builder.query({
            query: (url) => ({ url: "api/" + url, method: "get" }),
            onQueryStarted: onQueryStartedErrorToast,
        }),
        sendForm: builder.mutation({
            query: ({ body, url, method = "POST" }) => ({
                url: "api/" + url,
                method: method,
                body: body,
            }),
            onQueryStarted: onQueryStartedErrorToast,
        }),
    }),
});

export const { useGetPageQuery, useLazyGetPageQuery, useSendFormMutation } = motorniAPI;

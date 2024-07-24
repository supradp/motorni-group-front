import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseUrl =
    !process.env.NODE_ENV || process.env.NODE_ENV === "development" ? `https://motorni-group.com.ua/` : `/`;

// export const baseUrl =
//     !process.env.NODE_ENV || process.env.NODE_ENV === "development"
//         ? `https://emotorni.digiants.com.ua/`
//         : `https://emotorni.digiants.com.ua/`;

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
        // prepareHeaders: (headers, { getState }) => {
        //     const status = getState().status.isShowErrorModal;
        //     headers.set("Content-Type", "application/json");
        //     headers.set("Accept", "application/json");
        //     if (status) {
        //         headers.set("Authorization", "Bearer " + localStorage.getItem("token"));
        //     }
        //     return headers;
        // },
    }),
    endpoints: (builder) => ({
        getPage: builder.query({
            query: (url) => ({ url: "api/" + url, method: "get" }),
            onQueryStarted: onQueryStartedErrorToast,

            headers: { "Content-Type": "application/json", Accept: "application/json" },
        }),
        sendForm: builder.mutation({
            query: ({
                body,
                url,
                method = "POST",
                headers = { "Content-Type": "application/json", Accept: "application/json" },
            }) => ({
                url: "api/" + url,
                method: method,
                body: body,
                headers: headers,
            }),
            onQueryStarted: onQueryStartedErrorToast,
        }),
    }),
});

export const { useGetPageQuery, useLazyGetPageQuery, useSendFormMutation } = motorniAPI;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isShowErrorModal: false,
    errorMassage: "",
};

export const statusSlice = createSlice({
    name: "status",
    initialState,
    reducers: {
        setShowErrorModal: (state, action) => {
            state.isShowErrorModal = action.payload;
        },
        setErrorMassage: (state, action) => {
            state.errorMassage = action.payload;
            if (action.payload) {
                state.isShowErrorModal = true;
            }
        },
    },
});

export const { setShowErrorModal, setErrorMassage } = statusSlice.actions;

export default statusSlice.reducer;

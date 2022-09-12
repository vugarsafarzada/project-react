import {createSlice} from "@reduxjs/toolkit";
import {apiCallBegan} from "./api";

const slice = createSlice({
    name: "picCarouselData",
    initialState: {
        list: [],
        loading: false,
    },

    reducers: {
        dataRequested: (picCarouselData, action) => {
            picCarouselData.loading = true;
        },

        dataReceived: (picCarouselData, action) => {
            picCarouselData.list = action.payload;
            picCarouselData.loading = false;
        },

        dataRequestFailed: (picCarouselData, action) => {
            picCarouselData.loading = false;
        },
    },
});

export default slice.reducer;

const {dataRequested, dataReceived, dataRequestFailed} = slice.actions;

const url = "/animals";

export const loadData = () => (dispatch) => {
    return dispatch(
        apiCallBegan({
            url,
            onStart: dataRequested.type,
            onSuccess: dataReceived.type,
            onError: dataRequestFailed.type,
        })
    );
};

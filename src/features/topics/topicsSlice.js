import { createSlice } from "@reduxjs/toolkit";


const topicsSlice = createSlice({
    name: "topics",
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            state.topics[action.payload.id] = action.payload;
            state.topics[action.payload.id].quizIds = [];
        }
    }
});

export const selectTopics = (state) => state.topics;


export default topicsSlice.reducer;
export const addTopicAction = topicsSlice.addTopic;
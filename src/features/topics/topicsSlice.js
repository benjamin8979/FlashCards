import { createSlice } from "@reduxjs/toolkit";


const topicsSlice = createSlice({
    name: "topics",
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            const topic = action.payload;
            topic.quizIds = [];
            state.topics[action.payload.id] = topic;
        },
        addQuizId: (state, action) => {
            const tId = action.payload.topicId;
            state.topics[tId].quizIds.push(action.payload.id);
        }
    }
});

export const selectTopics = (state) => state.topics.topics;


export default topicsSlice.reducer;
export const {addTopic, addQuizId} = topicsSlice.actions;

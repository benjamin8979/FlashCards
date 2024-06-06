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
        addQuiz: (state, action) => {
            state[action.payload.topicId].quizIds.push(action.payload);
        }
    }
});

export const selectTopics = (state) => state.topics.topics;


export default topicsSlice.reducer;
export const {addTopic, addQuiz} = topicsSlice.actions;

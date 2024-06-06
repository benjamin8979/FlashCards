import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
    name: "cards",
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            state.cards[action.payload.id] = action.payload;
        }
    }
});

export const selectCard = (state, id) => state.cards.cards.id;

export default cardsSlice.reducer;
export const { addCard } = state.action;

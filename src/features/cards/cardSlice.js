import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
    name: 'cards',
    initialState: {cards:{}},
    reducers: {
        addCard: (state, action) => {
            const {id} = action.payload
            state.cards[id] = action.payload
        }
    }
})

export const {addCard} = cardSlice.actions
export default cardSlice.reducer
export const selectCards = state => state.cards.cards
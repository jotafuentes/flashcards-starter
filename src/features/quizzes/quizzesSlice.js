import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const {id} = action.payload
            state.quizzes[id] = action.payload  
        }
    }
})

export const newQuizThunk = (payload) => {
    const {topicId, id} = payload
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuiz(payload))
        dispatch(addQuizId({topicId: topicId, quizId: id} ))

    }
}

export const selectQuiz = state => state.quizzes.quizzes
export const {addQuiz} = quizzesSlice.actions
export default quizzesSlice.reducer
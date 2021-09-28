import { ADD_NUMBER, SUB_NUMBER } from "./actionTypes"

export const addNumber = () => ({
    type: ADD_NUMBER,
    payload: 1,
})

export const subNumber = () => ({
    type: SUB_NUMBER,
    payload: 1,
})
import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        modalTypes: null 
    },
    reducers: {
        openModal: (state, action) => {
            state.modalTypes = action.payload
        },
        closeModal: (state) => {
            state.modalTypes = null
        }
    }
})

export const {openModal, closeModal} = modalSlice.actions
export default modalSlice
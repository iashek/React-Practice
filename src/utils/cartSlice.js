import { createSlice, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        // "addItems" here is basically a reducer function which will map to an action
        addItems: (state, action)=>{
            // mutating the state here
            state.items.push(action.payload);
        },
        removeItem: (state)=>{
            state.items.pop();
        },
        clearCart: (state) =>{
            state.items.length = 0; // []
        }
    }
});

// action mapping
export const {addItems, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
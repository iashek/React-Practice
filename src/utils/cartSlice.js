import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    // can have multiple reducer function here
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
            console.log(current(state));
            state.items.length = 0; // []

            // 2nd way, the below new array will replace the original state
            // return { items: []};
        }
    }
});

// action mapping
export const {addItems, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
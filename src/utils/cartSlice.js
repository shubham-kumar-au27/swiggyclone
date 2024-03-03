import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            //Vanilla(older) Redux ==> don't mutate state, -->returning newstate was mandatory--
            //const newState = [...state];
            //newState.items.push(action.payload);
            // return newState--

            state.items.push(action.payload);

        },
         removeItem:(state)=>{
            state.items.pop()

         },
         //orignal state - ["pizza"]
         clearCart:(state)=>{
            //RTK - Either mutate the existing state or return a new state----
            // state.items.length  = 0; //state = [];
                // or
            return {items:[]}    //this new object will be replaced inside orignal state = [] 


         }
    }
})

export const {addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;



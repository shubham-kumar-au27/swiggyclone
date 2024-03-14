import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
        resId:null,
        TotalPrice:0
    },
    reducers:{
        addItem:(state,action)=>{
            //Vanilla(older) Redux ==> don't mutate state, -->returning newstate was mandatory--
            //const newState = [...state];
            //newState.items.push(action.payload);
            // return newState--
            const {Item} = action.payload

            state.items.push(Item);  
        },
         removeItem:(state)=>{
            state.items.pop()

         },
         //orignal state - ["pizza"]
         clearCart:(state)=>{
            //RTK - Either mutate the existing state or return a new state----
            // state.items.length  = 0; //state = [];
                // or
            return {items:[],TotalPrice:0}    //this new object will be replaced inside orignal state = [] 
         },
         addResId:(state,action)=>{
            
            state.resId = action.payload
         },
         addToTotalPrice:(state,action)=>{
            state.TotalPrice += action.payload


         },
        //  MinusToTotalPrice:(state,action)=>{

        //  }
    }
})

export const {addItem,removeItem,clearCart,addResId,addToTotalPrice} = cartSlice.actions;

export default cartSlice.reducer;



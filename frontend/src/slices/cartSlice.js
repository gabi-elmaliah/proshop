import {createSlice} from '@reduxjs/toolkit'
import { updateCart } from '../utils/cartUtils';

const initialState=localStorage.getItem("cart") ? 
JSON.parse(localStorage.getItem("cart")) : {cartItems:[], shippingAddress:{}, paymentMethod:'Paypal'};


const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:
    {
        addToCart:(state,action)=>{
            const item=action.payload;
            const exsitItem=state.cartItems.find((x)=>x._id===item._id);

            if (exsitItem){
                state.cartItems=state.cartItems.map((x)=>x._id===exsitItem._id ? item : x   
                )

            }
            else{
                state.cartItems=[...state.cartItems,item];
            }
              
            return updateCart(state);
        },
        removeFromCart:(state,action)=>{
            const id=action.payload;
            state.cartItems=state.cartItems.filter((x)=>x._id!==id);
            return updateCart(state);
        },
        saveShippingAddress:(state,action)=>{
            state.shippingAddress=action.payload;
            return updateCart(state);
        },
        savePaymentMethod:(state,action)=>{
            state.paymentMethod=action.payload;
            return updateCart(state);
        },
        clearCartItems:(state,action)=>{
            state.cartItems=[];
            return updateCart(state);
        },
        resetCart:(state,action)=>{
           state=initialState 
        }




    }

})

export const {addToCart,removeFromCart,saveShippingAddress,savePaymentMethod,clearCartItems}=cartSlice.actions;
export default cartSlice.reducer;
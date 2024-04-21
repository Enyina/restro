"use client";

import { createSlice } from "@reduxjs/toolkit";
interface SingleOrderItem {
  id: number;
  name: string;
  size?: string; // Optional property for size
  price: number;
  totalPrice: string;
  image: string;
  quantity: number;
}
interface FamilyOrderItem extends SingleOrderItem {} // Inherits from SingleOrderItem

interface FamilyOrder {
  items: FamilyOrderItem[];
}
export interface CartState {
  singleOrder: SingleOrderItem[];
  FamilyOrder: FamilyOrder[];
  orderTab: string;
  itemId: number
  isAdded: boolean
}

const initialState: CartState = {
  singleOrder: [],

  FamilyOrder: [],

  orderTab: "",
  itemId: 0,
  isAdded: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToSingleOrder: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.singleOrder.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity = existingItem.quantity + newItem.quantity;
        // existingItem.totalPrice = existingItem.totalPrice + newItem.totalPrice;

        // Don't add duplicate item
      }else{
        state.singleOrder.push(newItem);
    
      }
      state.isAdded = true

      
    },
    removeFromSingleOrder: (state, action) => {
      const { itemId } = action.payload;
      state.singleOrder = state.singleOrder.filter(
        (item) => item.id !== itemId
      );
    },
    clearSingleOrder: (state) => {
      state.singleOrder = [];
    },
    addToFamilyOrder: (state, action) => {
      const newItem = action.payload;
      // const existingItem = state.FamilyOrder.find(family => family.items.some(item => item.id === newItem.id));
      // if (existingItem) {
      //     // existingItem.quantity++;
      //   // Don't add duplicate item
      // }

      state.FamilyOrder.push(newItem);
   
    },
    removeFromFamilyOrder: (state, action) => {
      const { index } = action.payload;
      if (index >= 0 && index < state.FamilyOrder.length) {
        state.FamilyOrder = state.FamilyOrder.slice(index, 1);
      }
    },
    clearFamilyOrder: (state) => {
      state.FamilyOrder = [];
    },
    switchOrderTab: (state, action) => {
      const { tab } = action.payload;
      state.orderTab = tab;
    },
    pushId: (state, action) =>{
      state.itemId = action.payload.itemId;
    },
    isAdded: (state, action) =>{
      state.isAdded = action.payload.isAdded;
    }
  },
});

export const {
  addToSingleOrder,
  removeFromFamilyOrder,
  removeFromSingleOrder,
  addToFamilyOrder,
  switchOrderTab,
  clearFamilyOrder,
  clearSingleOrder,
  pushId,
  isAdded
} = cartSlice.actions;

export default cartSlice.reducer;

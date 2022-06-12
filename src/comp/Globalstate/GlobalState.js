import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  product: [],
  cart: [],
};

const GlobalState = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    createUser: (state, { payload }) => {
      state.user = payload;
    },
    addProduct: (state, { payload }) => {
      state.product = payload;
    },
    allItems: (state, { payload }) => {
      state.items = payload;
    },
    cartItems: (state, { payload }) => {
      const check = state.cart.findIndex((el) => el._id === payload._id);
      if (check >= 0) {
        return;
      } else {
        state.cart.push({ ...payload });
      }
    },
    removeItems: (state, { payload }) => {
      state.cart = state.cart.filter((el) => el._id !== payload._id);
    },
    totalCollect: (state, { payload }) => {
      const { Money, Balance } = state.cart.reduce(
        (totalGiven, totalToGive) => {
          const { given, balance } = totalToGive;

          totalGiven.Balance += balance;
          totalGiven.Money += given;

          return totalGiven;
        },
        {
          Money: 0,
          Balance: 0,
        }
      );
      state.totalCollected = Money;
      state.totalBalance = Balance;
    },

    addToCart: (state, { payload }) => {
      const check = state.cart.findIndex((el) => el._id === payload._id);

      if (check >= 0) {
        state.cart[check].Qty += 1;
      } else {
        state.cart.push({ ...payload, Qty: 1 });
      }
    },

    signOut: (state) => {
      state.user = null;
    },
    totalState: (state, { payload }) => {
      const { totalCost, totalDays } = state.bookings.reduce(
        (totalPrice, allBookings) => {
          const { price, QTY } = allBookings;

          const mainCost = price * QTY;

          totalPrice.totalDays += QTY;
          totalPrice.totalCost += mainCost;

          return totalPrice;
        },
        {
          totalCost: 0,
          totalDays: 0,
        }
      );

      state.tatalRoomCost = totalCost;
      state.totalRoomDays = totalDays;
    },
  },
});

export const {
  createUser,
  signOut,
  addProduct,
  addToCart,
  totalState,
  totalCollect,
} = GlobalState.actions;

export default GlobalState.reducer;

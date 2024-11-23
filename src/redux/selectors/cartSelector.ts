import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartTotalItems = createSelector(
  [selectCartItems],
  (items) => items.length
);

export const selectCartTotalPrice = createSelector(
  [selectCartItems],
  (items) => items.reduce((total, item) => total + item.price, 0)
);

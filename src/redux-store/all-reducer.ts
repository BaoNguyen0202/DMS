import {combineReducers} from '@reduxjs/toolkit';
import {appReducer} from './app-reducer/reducer';
import { customerReducer } from './customer-reducer/reducer';
import { productReducer } from './product-reducer/reducer';
import { orderReducer } from './order-reducer/reducer';
import { checkinReducer } from './checkin-reducer/reducer';

export const allReducer = combineReducers({
  app: appReducer,
  customer:customerReducer,
  order : orderReducer,
  product : productReducer,
  checkin : checkinReducer
});

export type RootState = ReturnType<typeof allReducer>;

// app/store.js //
import { configureStore } from '@reduxjs/toolkit'
import vimeoSlice from './vimeoList'


export const store = configureStore({
    reducer: vimeoSlice
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
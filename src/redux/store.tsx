// app/store.js //
import { configureStore } from '@reduxjs/toolkit'
import vimeoSlice from './vimeoList'
import youtubeSlice from './youtubeList'


export const store = configureStore({
    reducer: { vimeoSlice, youtubeSlice }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
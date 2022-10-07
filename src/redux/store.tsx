// app/store.js //
import { configureStore } from '@reduxjs/toolkit'
import vimeoSlice from './videoList'

export const store = configureStore({
    reducer: {
        // videoList 에서 만든 slice 를 여기에 넣는다
        vimeoSlice: vimeoSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
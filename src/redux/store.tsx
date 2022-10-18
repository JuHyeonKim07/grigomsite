// app/store.js //
import { configureStore } from '@reduxjs/toolkit'
import vimeoSlice from './vimeoList'
import youtube_ProductSlice from './youtubeList_Product'
import youtube_PersonalSlice from './youtubeList_Personal'
import youtube_PlaylistSlice from './youtubeList_PlayList'



export const store = configureStore({
    reducer: { vimeoSlice, youtube_ProductSlice, youtube_PersonalSlice, youtube_PlaylistSlice }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
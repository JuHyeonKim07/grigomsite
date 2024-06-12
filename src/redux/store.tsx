// app/store.js //
import { configureStore } from '@reduxjs/toolkit'
import youtubeVideosList from './youtubeListGetVideos'
import youtubeCategory from './youtubeListPlaylist'

export const store = configureStore({
    reducer: { youtubeVideosList, youtubeCategory }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
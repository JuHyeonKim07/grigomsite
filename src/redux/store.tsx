// app/store.js //
import { configureStore } from '@reduxjs/toolkit'
import youtube_VideosSlice from './youtubeList_GetVideos'
import youtube_PersonalSlice from './youtubeList_Personal'
import youtube_PlaylistSlice from './youtubeList_Playlist'



export const store = configureStore({
    reducer: { youtube_VideosSlice, youtube_PersonalSlice, youtube_PlaylistSlice }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
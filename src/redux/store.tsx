// app/store.js //
import { configureStore } from '@reduxjs/toolkit'
import userSlice from './videoList'

export const store = configureStore({
    reducer: {
        // 3번에서 만든 slice를 여기에 넣는다
        // name으로 설정했던 것을 key로 사용한 것을 볼 수 있다.
        user: userSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
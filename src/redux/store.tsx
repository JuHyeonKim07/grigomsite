import { configureStore } from '@reduxjs/toolkit'

// 스토어 생성
export const store = configureStore({
    reducer: {
        // 3번에서 만들 slice를 여기에 넣을 예정
    },
})

// useSelector 사용시 타입으로 사용하기 위함
export type RootState = ReturnType<typeof store.getState>
// useDispatch를 좀 더 명확하게 사용하기 위함
export type AppDispatch = typeof store.dispatch
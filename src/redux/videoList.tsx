import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
import { vimeoAcsses, youTubeAcsses } from '../apis/Acsses';


// 통신 성공 시 가져오게 될 데이터의 타입
type vimeoListType = {
    name: string
    pictures: {
        active: boolean
        base_link: string
        default_picture: boolean
        resource_key: string
        sizes: {
            height: number
            link: string
            width: number
        }[]
    }
    type: string
    uri: string
    embed: {
        html: string
    }
}

// 통신 에러 시 보여줄 에러 메세지의 타입
type MyKnownError = {
    errorMessage: string
}

// 비동기 통신 구현
const getViemoList = createAsyncThunk<
    vimeoListType[],                        // 성공 시 리턴 타입
    number,                                 // input type. 아래 콜백함수에서 userId 인자가 input에 해당
    { rejectValue: MyKnownError }           // ThunkApi 정의({dispatch?, state?, extra?, rejectValue?})
>('GET/VIMEOLIST', async (userId, thunkAPI) => {
    try {
        const { data } = await axios.get(`https://api.vimeo.com/users/${vimeoAcsses.userid}/videos`, {
            headers: {
                Authorization: `bearer ${vimeoAcsses.accessToken}`
            }
        })
        return data;
    } catch (e) {
        // rejectWithValue를 사용하여 에러 핸들링이 가능하다
        return thunkAPI.rejectWithValue({ errorMessage: '알 수 없는 에러가 발생했습니다.' });
    }
})

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        ...
    },
    extraReducers: (builder) => {
        builder
            // 통신 중
            .addCase(getViemoList.pending, (state) => {
                state.error = null;
                state.loading = true;
            })
            // 통신 성공
            .addCase(getViemoList.fulfilled, (state, { payload }) => {
                state.error = null;
                state.loading = false;
                state.todos = payload;
            })
            // 통신 에러
            .addCase(getViemoList.rejected, (state, { payload }) => {
                state.error = payload;
                state.loading = false;
            });
    },
})
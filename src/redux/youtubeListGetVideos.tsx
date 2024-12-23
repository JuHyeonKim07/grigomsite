/** 그리곰 픽쳐스 영상리스트 불러오기*/
/** Playlist 를 이용한 카테고리를 통해 정보를 불러옴 */

import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { youtubeResponse } from "../getTypes";

interface PostState {
    loading: boolean;
    error: string | null;
    data: youtubeResponse | null;
}

const initialState = {
    loading: false,
    error: null,
    data: null,
} as PostState;

const BASE_URL = "https://grigompictureshidefunctions.netlify.app";

// ACTION
export const getYoutubeListVideosAction = createAsyncThunk(
  "GET/YOUTUBE_PRODUCT",
  async (playlistId: string, thunkAPI) => {
    try {
      // URL 생성
      const url = new URL("youtube/v3/playlistItems", BASE_URL);
      const parameters = new URLSearchParams({
        part: "snippet",
        playlistId: playlistId,
        maxResults: "30",
        // API 키는 포함하지 않음
      });
      url.search = parameters.toString();

      // API 호출
      const { data } = await axios.get<youtubeResponse>(url.toString());
      return data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue({
        errorMessage: "호출에 실패했습니다.",
      });
    }
  }
);

// SLICE
const youtubeVideosList = createSlice({
    name: "YOUTUBE_PRODUCT",
    initialState,
    reducers: {},
    // createAsyncThunk 호출 처리 = extraReducers
    extraReducers(builder) {
        builder
            .addCase(getYoutubeListVideosAction.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getYoutubeListVideosAction.fulfilled, (state, action: PayloadAction<youtubeResponse>) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getYoutubeListVideosAction.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});


export default youtubeVideosList.reducer;
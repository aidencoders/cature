import axios, { AxiosResponse } from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ImageData } from "../../components/App/index";
import URL from "../../constant";

type ImageState = {
  status: "loading" | "idle" | "failed";
  images: ImageData[];
};

const initialState: ImageState = {
  status: "idle",
  images: [],
};

export const fetchingImageAsync = createAsyncThunk(
  "image/fetchImages",
  async () => {
    const { data } = await axios.get<ImageData[], AxiosResponse<ImageData[]>>(
      URL.BASE_URL,
    );

    return data;
  },
);

export const imageSlice: any = createSlice({
  name: "image",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchingImageAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchingImageAsync.fulfilled, (state, action) => {
        state.status = "idle";

        state.images = action.payload;
      })
      .addCase(fetchingImageAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default imageSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "7d122ab618488f4e7bb5bc85d3a97af2";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) {
throw new Error('City not found')
}
  return response.json()

  }
);

const initialState = {
  data: null,
  status: "idle",
  error: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = "loading"
        state.error = null
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.data = action.payload
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      });
  },
});

export default weatherSlice.reducer;
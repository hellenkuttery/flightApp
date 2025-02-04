import { createSlice } from "@reduxjs/toolkit";

const flightSlice = createSlice({
  name: "flight",
  initialState: {
    flights: [],
    error: false,
    loading: false,
    nearbyAirports: [],
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    fetchSuccess: (state, { payload }) => {
        console.log("payload",payload)
      state.nearbyAirports = payload;
    },
  },
});

export const { fetchFail, fetchStart, fetchSuccess } = flightSlice.actions;
export default flightSlice.reducer;

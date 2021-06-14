import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: false,
  reducers: {
    setTrue: (state) => {
      return true;
    },
    setFalse: (state) => {
      return false;
    },
  },
});

export const { setTrue, setFalse } = authSlice.actions;

export default authSlice.reducer;

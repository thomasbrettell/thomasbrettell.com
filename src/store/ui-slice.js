import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { navOpen: false, snack: { message: '', status: false } },
  reducers: {
    setNavOpen(state) {
      state.navOpen = !state.navOpen;
    },
    setSnack(state, action) {
      let newState = action.payload

      if(!newState.message) {
        newState.message = state.snack.message
      }

      state.snack = newState
    }
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;

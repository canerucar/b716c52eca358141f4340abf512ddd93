import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedSportProgram: null,
};

const sportProgramSlice = createSlice({
  name: 'sportProgram',
  initialState,
  reducers: {
    selectSportProgram(state, action) {
      state.selectedSportProgram = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    sportProgram: sportProgramSlice.reducer,
  },
});

export const { selectSportProgram, setLoading } = sportProgramSlice.actions;

export default store;

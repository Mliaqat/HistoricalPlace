import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  visitedList: string[]; // Assuming IDs are strings, change to `number[]` if IDs are numeric
}

const initialState: AuthState = {
  visitedList: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setVisitedList: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      if (state.visitedList.includes(id)) {
        state.visitedList = state.visitedList.filter((item) => item !== id); // Remove ID
      } else {
        state.visitedList.push(id); // Add ID
      }
    },
  },
});

export const { setVisitedList } = dataSlice.actions;

export default dataSlice.reducer;

export const selectVisitedList = (state: any) => state.data.visitedList;

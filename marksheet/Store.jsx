import { configureStore, createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: "students",
  initialState: {
    list: [],
  },
  reducers: {
    addStudent: (state, action) => {
      state.list.push(action.payload);
    },

    deleteStudent: (state, action) => {
      state.list.splice(action.payload, 1);
    },

    updateStudent: (state, action) => {
      const { index, subject, marks } = action.payload;
      state.list[index] = { subject, marks };
    },
  },
});

export const { addStudent, deleteStudent, updateStudent } =
  studentSlice.actions;

const store = configureStore({
  reducer: {
    students: studentSlice.reducer,
  },
});

export default store;
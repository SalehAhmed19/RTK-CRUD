import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  isLoading: false,
  isError: false,
};

// create action
export const createUser = createAsyncThunk("user", async (data) => {
  const response = await axios.post(
    "https://68689289d5933161d70be704.mockapi.io/users",
    data
  );

  return response.data;
});

const userSlice = createSlice({
  name: "userDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users.push(action.payload);
    });

    builder.addCase(createUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(createUser.rejected, (state, action) => {
      state.isError = true;
      console.log({ error: action.error });
    });
  },
});

export default userSlice.reducer;
// export {} = userSlice.actions;
// https://68689289d5933161d70be704.mockapi.io/users

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

// show data
export const showUser = createAsyncThunk("showUser", async () => {
  const response = await axios.get(
    "https://68689289d5933161d70be704.mockapi.io/users/"
  );

  return response.data;
});

// delete data
export const deleteUser = createAsyncThunk("deleteUser", async (id) => {
  const response = await axios.delete(
    `https://68689289d5933161d70be704.mockapi.io/users/${id}`
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

    builder.addCase(showUser.fulfilled, (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    });

    builder.addCase(showUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(showUser.rejected, (state, action) => {
      state.isError = true;
      console.log({ error: action.error });
    });

    builder.addCase(deleteUser.fulfilled, (state, action) => {
      const id = action.payload;
      if (id) {
        state.users = state.users.filter((user) => user.id !== id);
      }
    });

    builder.addCase(deleteUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(deleteUser.rejected, (state, action) => {
      state.isError = true;
      console.log({ error: action.error });
    });
  },
});

export default userSlice.reducer;
// export {} = userSlice.actions;
// https://68689289d5933161d70be704.mockapi.io/users

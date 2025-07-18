import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  isLoading: false,
  isError: false,
  searchData: [],
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

// update action
export const updateUser = createAsyncThunk("updateUser", async (data) => {
  console.log(data);
  const response = await axios.put(
    `https://68689289d5933161d70be704.mockapi.io/users/${data.id}`,
    data
  );
  console.log(response.data);
  return response.data;
});

const userSlice = createSlice({
  name: "userDetail",
  initialState,
  reducers: {
    searchData: (state, action) => {
      state.searchData = action.payload;
    },
  },
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
        state.isLoading = false;
      }
    });

    builder.addCase(deleteUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(deleteUser.rejected, (state, action) => {
      state.isError = true;
      console.log({ error: action.error });
    });

    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    });

    builder.addCase(updateUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(updateUser.rejected, (state, action) => {
      state.isError = true;
      console.log({ error: action.error });
    });
  },
});

export default userSlice.reducer;
export const { searchData } = userSlice.actions;
// https://68689289d5933161d70be704.mockapi.io/users

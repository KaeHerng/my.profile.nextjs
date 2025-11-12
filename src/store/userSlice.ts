// src/store/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  isLoggedIn: boolean;
  user: { name: string; email: string } | null;
  theme: "light" | "dark";
}

const initialState: UserState = {
  isLoggedIn: false,
  user: null,
  theme: "light",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ name: string; email: string }>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.theme = action.payload;
    },
    updateUser: (state, action: PayloadAction<Partial<{ name: string; email: string }>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
  },
});

export const { login, logout, setTheme, updateUser } = userSlice.actions;
export default userSlice.reducer;

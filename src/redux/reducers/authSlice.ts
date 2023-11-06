import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  token: string;
}
interface loginForm {
  username: string;
  password: string;
}
const initialState: InitialState = {
  token: "",
};

export const authSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<loginForm>) => {
      state.token = "token";
    },
  },
});
export const { login } = authSlice.actions;
export default authSlice.reducer;

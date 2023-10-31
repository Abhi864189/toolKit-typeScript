import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface InitialState {
  token: string;
}
interface loginForm {
  userName: string;
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

import { createSlice } from "@reduxjs/toolkit";
import { defaultSystemState } from "../states/system";

export const appSlice = createSlice({
   name: "system",
   initialState: defaultSystemState,
   reducers: {
      setSystem: (state, action) => action.payload,
      updateSystem: (state, action) => ({ ...state, ...action.payload }),
      updatePage: (state, action) => ({ ...state, page: action.payload }),
      updateLocales: (state, action) => ({ ...state, locales: action.payload }),
      updateLocale: (state, action) => ({ ...state, app: { ...action.payload } }),
      updateLogedd: (state, action) => ({ ...state, loggedIn: action.payload }),
      login: (state, action) => ({ ...state, loggedIn: true, user: action.payload }),
      logout: (state, action) => ({ ...state, loggedIn: false, user: null })
   }
});

export const { setSystem, updateSystem, updatePage, updateLocales, updateLocale, updateLogedd, login, logout } = appSlice.actions;
export default appSlice.reducer;

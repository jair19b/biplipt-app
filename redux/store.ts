import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "./slices/appSlice";

/** Configurar Store del estado global de la aplicación */
export const store = configureStore({
   reducer: {
      system: appSlice.reducer
   }
});

export type StoreState = ReturnType<typeof store.getState>;

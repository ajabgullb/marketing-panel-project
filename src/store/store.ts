import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./slices/authSlice"

const store = configureStore({
  reducer: {
    auth: authSlice,
  }
})

// Infer the `RootState` type from the store itself
export type RootState = ReturnType<typeof store.getState>

export default store
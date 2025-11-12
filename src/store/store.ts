// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// Only client-side persistence
if (typeof window !== "undefined") {
  const saved = localStorage.getItem("reduxState");
  if (saved) {
    try {
      const persisted = JSON.parse(saved);
      if (persisted.user?.theme) store.dispatch({ type: "user/setTheme", payload: persisted.user.theme });
      if (persisted.user?.user) store.dispatch({ type: "user/login", payload: persisted.user.user });
    } catch {}
  }

  store.subscribe(() => {
    try {
      localStorage.setItem("reduxState", JSON.stringify(store.getState()));
    } catch {}
  });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

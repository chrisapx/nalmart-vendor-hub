//provider.js
"use client";
import { Provider } from "react-redux";
import {store} from "./Store";
export function StateProvider({ children }) {
    return <Provider store={store}>{children}</Provider>;
}

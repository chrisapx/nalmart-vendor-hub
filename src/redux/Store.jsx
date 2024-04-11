import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './slices/LoaderSlice';

export const store = configureStore({
    reducer: {
        loading: loadingReducer,
    },
});

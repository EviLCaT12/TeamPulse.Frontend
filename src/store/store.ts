import { configureStore } from '@reduxjs/toolkit/react'
import employeeReducer from '../modules/teams/employeeSlice'
import { useDispatch, useSelector } from 'react-redux'
import { baseApi } from '../shared/api'

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    "employee": employeeReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(baseApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch  

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from '../modules/teams/employeeSlice'
import { useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
    "employee": employeeReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch  

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
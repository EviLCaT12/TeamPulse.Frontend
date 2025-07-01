import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router'
import { AuthProvider } from './contexts/auth/AuthContext'
import { store } from './store/store'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <AuthProvider>
            <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
    </Provider>
)
 
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from 'react-router-dom';
import axios from 'axios';
import Root from './Root.jsx';
import Home from './Pages/Home.jsx'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path='/'
            element={<Root/>}
        >
            <Route 
                index
                element={<Home />}
            />
        </Route>
    )
)

export default router

import './App.css'
import FetchMovie from './api/movie.api'
import { Outlet } from 'react-router-dom'

function App() {
    return(
        <>
            <h1>Coucou</h1>
            <Outlet />
            <FetchMovie></FetchMovie>

        </>
    )
}

export default App

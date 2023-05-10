
import './App.css'
import FetchMovie from './api/movie.api'
import { Outlet } from 'react-router-dom'
import Footer from './containers/footer/footer'

function App() {
    return(
        <>
            <h1 className="">Coucou</h1>
            <Outlet />
            <FetchMovie></FetchMovie>
            <Footer/>

        </>
    )
}

export default App

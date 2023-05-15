
import './App.css'
import FetchMovie from './api/movie.api'
import { Outlet } from 'react-router-dom'
import Footer from './containers/footer/footer'
import Header from './containers/header/header'

function App() {
    return(
        <>
            <Header/>
            <h1 >Coucou</h1>
            <Outlet />
            <Footer/>

        </>
    )
}

export default App

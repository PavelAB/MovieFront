
import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './containers/footer/footer'
import Header from './containers/header/header'

function App() {
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>

        </>
    )
}

export default App

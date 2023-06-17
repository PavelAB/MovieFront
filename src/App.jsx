
import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './containers/footer/footer'
import Header from './containers/header/header'

function App() {
    return(
        <div className='min-h-screen flex flex-col'>
            <Header/>
            <main className='flex flex-col justify-center flex-grow'>
                <Outlet/>
            </main>
            <Footer/>

        </div>
    )
}

export default App

import { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"


//TODO  CSS -> Ajoute de l'espace entre les éléments 
//FIXME La navbar ne se met pas à jour lorsque je me connecte, il faut rafraîchir la page, mauvais comportement

const CustomNavLink = ({ to, text }) => (
    <NavLink to={to} className={({ isActive, isPending }) =>
        `${isPending ? "pending" : isActive ? "active" : ""} test`}>
        {text}
    </NavLink>
)
const Header = () => {
    const [connected, setConnected] = useState(localStorage.getItem('ID_User'))

    useEffect(() => {
        setConnected(localStorage.getItem('ID_User'))
    },[localStorage.getItem('ID_User')])
    
    
    const handleLogOut = () => {

        setConnected(null)
        localStorage.clear()
        
    }
    



    return (

        <div className="header">
            <div className="main-container">
                <div className="links-container">
                    <ul>
                        <li>
                            <CustomNavLink to="/" text="Home" />
                        </li>
                        <li>
                            <CustomNavLink to="/about" text="About" />
                        </li>
                        <li>
                            <CustomNavLink to="/movie" text="Movies" />
                        </li>
                        <li>
                            <CustomNavLink to="/stars" text="Stars" />
                        </li>
                        <li>
                            <CustomNavLink to="/awards" text="Awards" />
                        </li>
                    </ul>
                </div>
                <div className="form-container">
                    <form action="">
                        <input type="text" placeholder="Tapez pour rechercher le film." />
                        <button type="submit" className="customButtons">Recherche</button>
                    </form>
                </div>
                <div className="ml-3">
                {!connected ?
                    <CustomNavLink to = '/login' text='Sign In'/> :
                    <button onClick={handleLogOut}>Log Out</button>
                }
                
                </div>
                
                
            </div>
        </div>



    )
}
export default Header
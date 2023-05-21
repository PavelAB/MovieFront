import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"


//TODO  CSS -> Ajoute de l'espace entre les éléments 

const CustomNavLink = ({ to, text }) => (
    <NavLink to={to} className={({ isActive, isPending }) =>
        `${isPending ? "pending" : isActive ? "active" : ""} test`}>
        {text}
    </NavLink>
)
const Header = () => {



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
                            <CustomNavLink to="/" text="Stars" />
                        </li>
                        <li>
                            <CustomNavLink to="/" text="Awards" />
                        </li>
                    </ul>
                </div>
                <div className="form-container">
                    <form action="">
                        <input type="text" placeholder="Tapez pour rechercher le film." />
                        <button type="submit" className="customButtons">Recherche</button>
                    </form>
                </div>
            </div>
        </div>



    )
}
export default Header
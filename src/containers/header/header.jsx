import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { tokenActionCreate } from "../../store/actions/token.action"


//TODO  CSS -> Ajoute de l'espace entre les éléments 
//FIXME La navbar ne se met pas à jour lorsque je me connecte, il faut rafraîchir la page, mauvais comportement

const CustomNavLink = ({ to, text }) => (
    <NavLink to={to} className={({ isActive, isPending }) =>
        `${isPending ? "pending" : isActive ? "active" : ""} test`}>
        {text}
    </NavLink>
)
const Header = () => {
    const dispatch = useDispatch()
    const [connected, setConnected] = useState(localStorage.getItem('ID_User'))
    const [role, setRole] = useState(localStorage.getItem('role'))
    const [menuAdmin, setMenuAdmin] = useState(false)
    const roleUser = useSelector(state => state.token.roleResult)
    
    useEffect(() => {
        console.log("token User ____",roleUser);
        dispatch(tokenActionCreate(localStorage.getItem('role')))
        setRole(localStorage.getItem('role'))
    }, [roleUser])


    const handleLogOut = () => {

        setConnected(null)
        setRole(null)
        dispatch(tokenActionCreate(''))
        localStorage.clear()
        
    }
    console.log("connected", connected);

 

    return (

        <div className="header">
            <div className="main-container">

                    <div className={`${roleUser === 'User' ? '' : 'hidden'} mr-3`}>
                        <div><button className="text-2xl no-underline text-gray-900 hover:text-gray-400" onClick={() => setMenuAdmin((menuAdmin) => !menuAdmin)}>Admin</button></div>
                        <div className={menuAdmin ? "open" : "closed"}>
                            <ul className=" border border-red-600">
                                <li>Movie</li>
                                <li>Actors</li>
                                <li>Companies</li>
                                <li>Tags</li>
                                <li>Genres</li>
                                <li>Awards</li>
                                <li>Users</li>
                            </ul>
                        </div>
                    </div>
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
                            <CustomNavLink to="/stars/1" text="Stars" />
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
                <div className="ml-3 border border-black">
                    {/* {!connected ? */}
                    {roleUser === '' || roleUser === null ?
                        <CustomNavLink to='/login' text='Sign In' /> :
                        <button onClick={handleLogOut}>Log Out</button>
                    }

                </div>


            </div>
        </div>



    )
}
export default Header
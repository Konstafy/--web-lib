import { NavLink } from 'react-router-dom'
import cl from './header.module.sass'

const Header = (props) => {
    return (
        <header>
            <NavLink to='/' className={cl.logo}>
                <p>--web-libs</p>
            </NavLink>
            <ul className={cl.links}>
                <NavLink exact to='/contact' className={cl.logo}>
                    <li className={cl.linkbox}>
                        <p>Contact us</p>
                    </li>
                </NavLink>
                <NavLink exact to='/about' className={cl.logo}>
                    <li className={cl.linkbox}>
                        <p>About us</p>
                    </li>
                </NavLink>
                <NavLink exact to='/license' className={cl.logo}>
                    <li className={cl.linkbox}>
                        <p>License</p>
                    </li>
                </NavLink>
                <NavLink exact to='/donut' className={cl.logo}>
                    <li className={cl.linkbox}>
                        <p>Donut</p>
                    </li>
                </NavLink>
                <NavLink exact to='/idea' className={cl.logo}>
                    <li className={cl.linkbox}>
                        <p>Project idea</p>
                    </li>
                </NavLink>
            </ul >
        </header >
    )
}
export default Header
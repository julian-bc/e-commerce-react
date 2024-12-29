import { NavLink } from 'react-router-dom';

export function Navbar() {
    let activeStyle = {
        color: 'green',
    }

    return (
        <nav>
            <ul>
                <li>
                    <NavLink 
                    to={'/'}>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to={'/'}
                    style={ ({isActive}) => isActive ? activeStyle : undefined }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to={'/clothes'}
                    style={ ({isActive}) => isActive ? activeStyle : undefined }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to={'/electronics'}
                    style={ ({isActive}) => isActive ? activeStyle : undefined }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to={'/furnitures'}
                    style={ ({isActive}) => isActive ? activeStyle : undefined }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to={'/toys'}
                    style={ ({isActive}) => isActive ? activeStyle : undefined }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to={'/others'}
                    style={ ({isActive}) => isActive ? activeStyle : undefined }>
                        Others
                    </NavLink>
                </li>
            </ul>

            <ul>
                <li>
                julian@platzi.com
                </li>
                <li>
                    <NavLink 
                    to={'my-orders'}
                    style={ ({isActive}) => isActive ? activeStyle : undefined }>
                        My orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to={'my-account'}
                    style={ ({isActive}) => isActive ? activeStyle : undefined }>
                        My account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to={'sign-in'}
                    style={ ({isActive}) => isActive ? activeStyle : undefined }>
                        Sign In
                    </NavLink>
                </li>
                <li>
                    🛒 0
                </li>
            </ul>
        </nav>
    );
}

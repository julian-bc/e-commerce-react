import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../contexts';
import { ShoppingCartIcon } from '@heroicons/react/20/solid';

export function Navbar() {
    const activeStyle = 'underline underline-offset-4';
    const {
        count,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu
    } = useContext(ShoppingCartContext);

    const toggleCheckoutSideMenu = () => {
        isCheckoutSideMenuOpen ? closeCheckoutSideMenu() : openCheckoutSideMenu();
    }

    return (
        <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0 bg-white'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to={'/'}>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to={'/'}
                    className={ ({isActive}) => isActive ? activeStyle : undefined }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to={'/men-clothing'}
                    className={ ({isActive}) => isActive ? activeStyle : undefined }>
                        Men&#39;s Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to={'/women-clothing'}
                    className={ ({isActive}) => isActive ? activeStyle : undefined }>
                        Women&#39;s Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to={'/electronics'}
                    className={ ({isActive}) => isActive ? activeStyle : undefined }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to={'/furnitures'}
                    className={ ({isActive}) => isActive ? activeStyle : undefined }>
                        Jewelery
                    </NavLink>
                </li>
            </ul>

            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    julian@platzi.com
                </li>
                <li>
                    <NavLink 
                    to={'my-orders'}
                    className={ ({isActive}) => isActive ? activeStyle : undefined }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to={'my-account'}
                    className={ ({isActive}) => isActive ? activeStyle : undefined }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to={'sign-in'}
                    className={ ({isActive}) => isActive ? activeStyle : undefined }>
                        Sign In
                    </NavLink>
                </li>
                <li className='flex items-center'>
                    <ShoppingCartIcon
                    onClick={() => toggleCheckoutSideMenu()}
                    className='h-6 w-6 text-black cursor-pointer' /> 
                    <div>{count}</div>
                </li>
            </ul>
        </nav>
    );
}

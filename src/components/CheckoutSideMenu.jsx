import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { ShoppingCartContext } from '../contexts';
import { totalPrice } from '../utils';
import { OrderCard } from './OrderCard';
import './styles/ProductDetail.css';

export function CheckoutSideMenu() {
    const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts } = useContext(ShoppingCartContext);

    return (
        <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='fond-medium text-xl'>My Order</h2>
                <XMarkIcon className='h-6 w-6 text-black cursor-pointer' onClick={() => closeCheckoutSideMenu()} />
            </div>

            <div className='px-6 overflow-y-scroll'>
                {cartProducts.map(product => (
                    <OrderCard
                    key={product.id}
                    id={product.id}
                    title={product.title} 
                    imageUrl={product.image} 
                    price={product.price}/>
                ))}
            </div>

            <div className='px-6'>
                <p className='flex justify-between items-center'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(cartProducts)}</span>
                </p>
            </div>
        </aside>
    );
}

import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { ShoppingCartContext } from '../contexts';
import { OrderCard } from './OrderCard';
import './styles/ProductDetail.css';
import './styles/Scrollable.css';

export function CheckoutSideMenu() {
    const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts } = useContext(ShoppingCartContext);

    return (
        <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} scrollable-cards product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='fond-medium text-xl'>My Order</h2>
                <XMarkIcon className='h-6 w-6 text-black cursor-pointer' onClick={() => closeCheckoutSideMenu()} />
            </div>

            <div className='px-6'>
                {cartProducts.map(product => (
                    <OrderCard
                    key={product.id}
                    title={product.title} 
                    imageUrl={product.image} 
                    price={product.price}/>
                ))}
            </div>
        </aside>
    );
}

import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { ShoppingCartContext } from '../contexts';
import { totalPrice } from '../utils';
import { OrderCard } from './OrderCard';
import { Link } from 'react-router-dom';
import './styles/ProductDetail.css';

export function CheckoutSideMenu() {
    const { 
        isCheckoutSideMenuOpen,
        closeCheckoutSideMenu,
        cartProducts,
        setCartProducts,
        order,
        setOrder,
        setCount 
    } = useContext(ShoppingCartContext);

    const handleCheckout = () => {
        const orderToAdd = {
            date: new Date().toLocaleDateString(),
            products: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: totalPrice(cartProducts)
        }

        setOrder([...order, orderToAdd]);
        setCartProducts([]);
        setCount(0);
        closeCheckoutSideMenu();
    }

    const removeProduct = (id) => {
        const updatedCartProducts = cartProducts.filter(product => product.id !== id);
        setCartProducts(updatedCartProducts);
        setCount(updatedCartProducts.length);
    }

    return (
        <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='fond-medium text-xl'>My Order</h2>
                <XMarkIcon className='h-6 w-6 text-black cursor-pointer' onClick={() => closeCheckoutSideMenu()} />
            </div>

            <div className='px-6 overflow-y-scroll flex-1'>
                {cartProducts.map(product => (
                    <OrderCard
                    key={product.id}
                    id={product.id}
                    title={product.title} 
                    imageUrl={product.image} 
                    price={product.price}
                    removeProduct={removeProduct}/>
                ))}
            </div>

            <div className='px-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(cartProducts)}</span>
                </p>
                
                <Link to='my-orders/last'>
                    <button className='bg-black w-full py-4 mb-6 text-white rounded' onClick={() => handleCheckout()}>Checkout</button>
                </Link>
            </div>
        </aside>
    );
}

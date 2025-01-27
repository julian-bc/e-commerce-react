import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { ShoppingCartContext } from '../contexts';

export function OrderCard({ id, title, imageUrl, price }) {
    const { cartProducts, setCartProducts, setCount } = useContext(ShoppingCartContext);

    const removeProduct = () => {
        const updatedCartProducts = cartProducts.filter(product => product.id !== id);
        setCartProducts(updatedCartProducts);
        setCount(updatedCartProducts.length);
    }

    return (
        <div className='flex justify-between items-center mb-3'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>{price}</p>
                <XMarkIcon onClick={removeProduct} className='h-6 w-6 text-black cursor-pointer' />
            </div>
        </div>
    );
}
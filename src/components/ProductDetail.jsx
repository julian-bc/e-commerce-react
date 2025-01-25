import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { ShoppingCartContext } from '../contexts';
import './styles/ProductDetail.css';

export function ProductDetail() {
    const { isProductDetailOpen, closeProductDetail, productToShow } = useContext(ShoppingCartContext);

    return (
        <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='fond-medium text-xl'>Detail</h2>
                <XMarkIcon className='h-6 w-6 text-black cursor-pointer' onClick={() => closeProductDetail()} />
            </div>
            <figure className='px-6 flex justify-center'>
                <img 
                className='w-auto h-[200px] rounded-lg' 
                src={productToShow.image} 
                alt={productToShow.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${productToShow.price}</span>
                <span className='font-medium text-md'>${productToShow.title}</span>
                <span className='font-light text-sm'>${productToShow.description}</span>
            </p>
        </aside>
    );
}

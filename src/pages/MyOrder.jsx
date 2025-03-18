import { useContext } from 'react';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { Layout, OrderCard } from '../components';
import { ShoppingCartContext } from '../contexts';
import { Link, useParams } from 'react-router-dom';

export function MyOrder() {
    const { order } = useContext(ShoppingCartContext);
    const params = useParams();
    const indexOrderPath = Number(params.id);
    console.log(indexOrderPath)

    const index = isNaN(indexOrderPath) ? order.length - 1 : indexOrderPath;

    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80 mb-3'>
                <Link to='/my-orders' className='absolute left-0'>
                    <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
                </Link>
                <h1>My Order</h1>
            </div>

            <div className='flex flex-col w-80'>
                {order?.[index]?.products.map(product => (
                    <OrderCard
                    key={product.id}
                    id={product.id}
                    title={product.title} 
                    imageUrl={product.image} 
                    price={product.price}/>
                ))}
            </div>
        </Layout>
    );
}

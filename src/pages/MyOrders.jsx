import { useContext } from 'react';
import { Layout, OrdersCard } from '../components';
import { ShoppingCartContext } from '../contexts';
import { Link } from 'react-router-dom';

export function MyOrders() {
    const { order } = useContext(ShoppingCartContext);
    
    return (
        <Layout>
            <div className='mb-3'>
                <h1 className='font-medium text-xl'>My Orders</h1>
            </div>

            {order.map((order, index) => (
                <Link key={index} to={`/my-orders/${index}`}>
                    <OrdersCard
                    date={order.date}
                    totalPrice={order.totalPrice} 
                    totalProducts={order.totalProducts}/>
                </Link>
            ))}
        </Layout>
    );
}

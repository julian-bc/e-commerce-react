import { Layout, Card, ProductDetail } from '../components'
import { useContext } from 'react';
import { ShoppingCartContext } from '../contexts';

export function Home() {
    const { products, setSearchByTitle } = useContext(ShoppingCartContext);

    return (
        <Layout>
            <div className='mb-3'>
                <h1 className='font-medium text-xl'>Exclusive Products</h1>
            </div>

            <input type="text" 
            placeholder='Search a product'
            className='rounded-lg border border-black w-80 px-4 py-2 mb-4 focus:outline-none'
            onChange={(event) => setSearchByTitle(event.target.value)}/>

            <div className='grid gap-6 grid-cols-4 w-full max-w-screen-lg'>
                {products?.length > 0 ? (
                    products?.map(product => <Card key={product.id} data={product}/>)
                ) : (
                    <p className='col-span-4 text-center text-gray-500'>No products found!</p>
                )}
            </div>
            <ProductDetail />
        </Layout>
    );
}

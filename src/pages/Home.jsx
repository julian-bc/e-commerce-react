import { useState,useEffect } from 'react';
import { Layout, Card } from '../components'

export function Home() {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            
            if (!response.ok) {
                throw new Error('Something went wrong');
            }

            const jsonData = await response.json();
            setProducts(jsonData);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <Layout>
            <div className='grid gap-6 grid-cols-4 w-full max-w-screen-lg'>
                {products?.map(product => {
                    return <Card key={product.id} data={product}/>
                })}
            </div>
        </Layout>
    );
}
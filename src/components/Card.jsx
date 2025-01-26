import { useContext } from "react";
import { ShoppingCartContext } from "../contexts";
import { PlusIcon } from '@heroicons/react/20/solid';

export function Card({ data }) {
    const {
        count,
        setCount,
        openProductDetail,
        setProductToShow,
        productToShow,
        cartProducts,
        setCartProducts,
        openCheckoutSideMenu
    } = useContext(ShoppingCartContext);

    const showProduct = (productDetail) => {
        openProductDetail();
        setProductToShow(productDetail);
        console.log(productToShow);
    }

    const addProductToCart = (event, product) => {
        event.stopPropagation();
        setCount(count + 1);
        setCartProducts([...cartProducts, product]);
        openCheckoutSideMenu();
    }

    const fmtTitle = (title) => {
        if (title.length > 32) {
            return title.slice(0, 32) + '...';
        }
        return title;
    }

    return (
        <div className="bg-white cursor-pointer w-56 h-64" onClick={() => showProduct(data)}>
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.category}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data.image} alt={data.title} />
                <button className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 text-2xl">
                    <PlusIcon onClick={(event) => addProductToCart(event, data)} className='h-6 w-6 text-black'/>
                </button>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{fmtTitle(data.title)}</span>
                <span className="text-lg font-medium">{data.price}</span>
            </p>
        </div>
    )
}
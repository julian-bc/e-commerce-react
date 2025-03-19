import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
    const [count, setCount] = useState(0);
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const [productToShow, setProductToShow] = useState({});
    const [cartProducts, setCartProducts] = useState([]);
    const [order, setOrder] = useState([]);
    const [products, setProducts] = useState([]);
    const [searchByTitle, setSearchByTitle] = useState(null);

    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

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
    }, []);

    const filteredItemsByTitle = (items, searchByTitle) => {
        if (!searchByTitle) return items;
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.trim().toLowerCase()));
    }

    return (
        <ShoppingCartContext.Provider value={{ 
            count,
            setCount,
            isProductDetailOpen,
            setIsProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            setProducts,
            products: filteredItemsByTitle(products, searchByTitle),
            setSearchByTitle,
            searchByTitle
        }}>
            { children }
        </ShoppingCartContext.Provider>
    )
}

import { useState } from "react";
import { createContext } from "react";

export const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
    const [count, setCount] = useState(0);
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const [productToShow, setProductToShow] = useState({});

    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    return (
        <ShoppingCartContext.Provider value={{ 
            count,
            setCount,
            isProductDetailOpen,
            setIsProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow
        }}>
            { children }
        </ShoppingCartContext.Provider>
    )
}
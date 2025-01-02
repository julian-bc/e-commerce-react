import { useState } from "react";
import { createContext } from "react";

export const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
    const [count, setCount] = useState(0);

    return (
        <ShoppingCartContext.Provider value={{ count, setCount }}>
            { children }
        </ShoppingCartContext.Provider>
    )
}
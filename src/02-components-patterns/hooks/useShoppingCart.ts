import { useState } from "react";
import { Product, ProductInCard } from "../interfaces/product.interfaces";


export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{[key: string]: ProductInCard}>({
        // '1': { ...product, count: 1 },
        // '2': { ...product2, count: 3 }
    });

    const onProductCountChange = ( { count, product }:{ count: number, product: Product } ) => {
        setShoppingCart( prev => {

            if(!count){
                delete prev[product.id]
                return {
                    ...prev
                }
            }
            // if ( count === 0 ) {
            //     const { [product.id]:toDelete, ...rest } = prev;
            //     return rest;
            // }
            return {
                ...prev,
                //La llave va a ser computada, por eso usamos corchetes
                [product.id]: { ...product, count }
            }
        })
    }

    return {
        onProductCountChange,
        shoppingCart
    }
}
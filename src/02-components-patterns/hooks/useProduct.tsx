import { useEffect, useRef, useState } from 'react'
import { onChangeArgs, Product } from '../interfaces/product.interfaces';

interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs ) => void;
    incBy?: number
}

export const useProduct = ( {onChange, product, incBy = 0}:useProductArgs ) => {
    const [counter, setCounter] = useState(incBy);

    const isControlled = useRef( !!onChange );

    const increaseOrDecreaseBy = (incBy: number) => {

        if ( isControlled.current ) {
            return onChange!( {count:incBy, product });
        }

        const newValue = Math.max( counter + incBy, 0);
        // setCounter( prev => Math.max( prev + incBy, 0));
        setCounter( newValue );

        onChange && onChange({ count: newValue, product });
    }

    useEffect(() => {
        setCounter( incBy );
    }, [incBy])
    
    return {
        counter,
        increaseOrDecreaseBy
    }
}

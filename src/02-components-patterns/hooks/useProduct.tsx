import { useEffect, useRef, useState } from 'react'
import { InitialValues, onChangeArgs, Product } from '../interfaces/product.interfaces';

interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs ) => void;
    incBy?: number
    initialValues?: InitialValues
}

export const useProduct = ( {onChange, product, incBy = 0, initialValues}:useProductArgs ) => {
    const [counter, setCounter] = useState<number>( initialValues?.count || incBy );
    const isMounted = useRef(false);

    const increaseOrDecreaseBy = (incBy: number) => {

        // const newValue = initialValues?.maxCount ? 
        //     (Math.max( counter + incBy, 0) && Math.min( counter + incBy, initialValues.maxCount)) :
        //     Math.max( counter + incBy, 0);
        let newValue = Math.max( counter + incBy, 0 )
        if ( initialValues?.maxCount ) {
            newValue = Math.min( newValue, initialValues.maxCount )
        }
        // setCounter( prev => Math.max( prev + incBy, 0));
        setCounter( newValue );

        onChange && onChange({ count: newValue, product });
    }

    const reset = () => setCounter( initialValues?.count || incBy );

    useEffect(() => {
        if ( !isMounted.current ) return;

        setCounter( incBy );
    }, [incBy])

    useEffect(() => {
        isMounted.current = true;
    }, [])

    return {
        counter,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === incBy,
        maxCount: initialValues?.maxCount,

        increaseOrDecreaseBy,
        reset
    }
}

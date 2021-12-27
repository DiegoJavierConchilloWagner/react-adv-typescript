import { useState } from 'react'

export const useProduct = () => {
    const [counter, setCounter] = useState(0);

    const increaseOrDecreaseBy = (incBy: number):any => 
    setCounter( prev => Math.max( prev + incBy, 0));

    return {
        counter,
        increaseOrDecreaseBy
    }
}

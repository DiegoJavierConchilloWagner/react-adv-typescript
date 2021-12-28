import { useProduct } from '../hooks/useProduct';
import { createContext, CSSProperties, ReactElement } from 'react';
import { ProductContextProps, Product, onChangeArgs } from '../interfaces/product.interfaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
    onChange?: ( args:onChangeArgs ) => void;
    incBy?: number
}

export const ProductCard = ({ children, product, className, style, onChange, incBy }:Props) => {

    const { counter, increaseOrDecreaseBy } = useProduct( { onChange,product, incBy } );

    return (
        <Provider value={{ counter, increaseOrDecreaseBy, product }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
            {children}
            </div>
        </Provider>
    )
}


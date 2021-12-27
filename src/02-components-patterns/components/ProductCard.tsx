import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { ProductContextProps, ProductCardProps } from '../interfaces/product.interfaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }:ProductCardProps) => {

    const { counter, increaseOrDecreaseBy } = useProduct();

    return (
        <Provider value={{ counter, increaseOrDecreaseBy, product }}>
            <div className={styles.productCard}>
            {children}
            </div>
        </Provider>
    )
}


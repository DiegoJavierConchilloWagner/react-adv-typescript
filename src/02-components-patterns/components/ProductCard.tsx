import { useProduct } from '../hooks/useProduct';
import { createContext, CSSProperties } from 'react';
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductcardHandlers } from '../interfaces/product.interfaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    // children?: ReactElement | ReactElement[] | () => JSX.Element;
    // children?: () => JSX.Element;
    children?: (args: ProductcardHandlers) => JSX.Element;
    className?: string;
    style?: CSSProperties;
    onChange?: ( args:onChangeArgs ) => void;
    incBy?: number;
    initialValues?: InitialValues;
}

export const ProductCard = ({ children, product, className, style, onChange, incBy, initialValues }:Props) => {

    const { counter, increaseOrDecreaseBy, maxCount, isMaxCountReached, reset } 
        = useProduct( { onChange,product, incBy, initialValues } );

    return (
        <Provider value={{ counter, increaseOrDecreaseBy, maxCount, product }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
            {
                children && children({
                    count: counter, 
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,
                    
                    increaseOrDecreaseBy,
                    reset
                })
            }
            </div>
        </Provider>
    )
}


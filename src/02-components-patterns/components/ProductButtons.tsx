import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export interface Props {
    className?: string;
    style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }:Props) => {

    const { increaseOrDecreaseBy, counter, maxCount } = useContext( ProductContext );

    const isMaxReached = useCallback(
        () => !!maxCount && counter === maxCount,
        [counter, maxCount],
    );

    return(
        <div className={`${styles.buttonsContainer} ${className}`} style={style} >
            <button className={styles.buttonMinus} onClick={ () => increaseOrDecreaseBy(-1) }> - </button>
            <div className={styles.countLabel}> {counter} </div>
            <button className={`${styles.buttonAdd} ${ isMaxReached() && styles.disabled}`} 
                disabled={isMaxReached()} onClick={ () => increaseOrDecreaseBy(1) } > + </button>
        </div>
    )
};
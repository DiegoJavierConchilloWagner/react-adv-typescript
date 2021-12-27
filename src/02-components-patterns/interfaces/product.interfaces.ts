import { ReactElement } from 'react';

export interface ProductCardhHOCProps {
    ({ children, product }: ProductCardProps ): JSX.Element,
    Title: ({ title }: {title: string}) => JSX.Element
    Image: ({ img }: {img?: string}) => JSX.Element,
    Buttons: () => JSX.Element
}

export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
}

export interface Product {
    id: string;
    title?: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    increaseOrDecreaseBy: (incBy: number) => void;
    product: Product;
}

// interface ProductButtonProps {
//     counter: number;
//     increaseOrDecreaseBy: (incBy: number) => void;
// };
import { Props as ProductButtonsProps } from '../components/ProductButtons';
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';

// export interface ProductCardhHOCProps {
//     ({ children, product }: ProductCardProps ): JSX.Element,
//     Title: ({ title, className }: {title: string, className?: string}) => JSX.Element
//     Image: ({ img, className }: {img?: string ,className?: string}) => JSX.Element,
//     Buttons: ({ className }: {className?: string}) => JSX.Element
// }
export interface ProductCardhHOCProps {
    ({ children, product }: ProductCardProps ):  JSX.Element,
    Title:   ( Props: ProductTitleProps )     => JSX.Element
    Image:   ( Props: ProductImageProps )     => JSX.Element,
    Buttons: ( Props: ProductButtonsProps )   => JSX.Element
}

// export interface ProductCardProps {
//     product: Product;
//     children?: ReactElement | ReactElement[];
//     className?: string;
// }

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

export interface onChangeArgs {
    product: Product;
    count: number;
}

export interface ProductInCard extends Product {
    count: number;
}
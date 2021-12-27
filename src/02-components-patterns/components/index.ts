import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductCardhHOCProps } from '../interfaces/product.interfaces';

import { ProductTitle } from '.';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';

export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";
// export { ProductCard } from './ProductCard';
export const ProductCard: ProductCardhHOCProps = Object.assign( ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
});


export default ProductCard;
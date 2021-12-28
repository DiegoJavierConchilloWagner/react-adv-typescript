import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';
import '../styles/custom-styles.css';

export const ShoppingPage = () => {

    const { onProductCountChange, shoppingCart } = useShoppingCart();

    return (
        <div>
            <h1>ShoppingPage</h1>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

            {
                products.map( p => (
                    <ProductCard key={p.id} product={p} className="bg-dark"
                        onChange={ onProductCountChange } 
                        // value={ shoppingCart[product.id].count ? shoppingCart[product.id].count : 0 }
                        incBy={ shoppingCart[p.id]?.count || 0 }
                        >
                        <ProductImage className="custom-image" />
                        <ProductTitle title={''} className="text-white"/>
                        <ProductButtons className="custom-buttons" />
                    </ProductCard>
                ))
            }

            </div>
            <div className="shopping-cart">
                {
                    Object.entries(shoppingCart).map( ([key,prod]) => (
                        <ProductCard key={key} product={prod} className="bg-dark" 
                            incBy={prod.count} onChange={ onProductCountChange } style={{width: '100px'}}>
                            <ProductImage className="custom-image" />
                            <ProductButtons className="custom-buttons" 
                                style={{display:'flex', justifyContent: 'center'}} />
                        </ProductCard>
                    ))
                }
                
            </div>
        </div>
    )
}

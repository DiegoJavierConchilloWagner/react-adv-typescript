import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import { products } from '../data/products';

const product = products[0];

export const ShoppingPage = () => {


    return (
        <div>
            <h1>ShoppingPage</h1>

                <ProductCard key={product.id} product={product}
                    initialValues={{
                        count: 1,
                        maxCount: 10
                    }}>
                    {
                        ({reset,isMaxCountReached,count,increaseOrDecreaseBy, maxCount}) => (
                            <>
                                <ProductImage/>
                                <ProductTitle/>
                                <ProductButtons/>
                            </>
                        )
                    }
                </ProductCard>

        </div>
    )
}

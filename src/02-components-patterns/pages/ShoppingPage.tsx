import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import { products } from '../data/products';
import '../styles/custom-styles.css';

const product = products[0];

export const ShoppingPage = () => {


    return (
        <div>
            <h1>ShoppingPage</h1>

                <ProductCard key={product.id} product={product} className="bg-dark"
                    initialValues={{
                        count: 0,
                        maxCount: 10
                    }}>
                    {
                        ({reset,isMaxCountReached,count,increaseOrDecreaseBy, maxCount}) => (
                            <>
                                <ProductImage className="custom-image" />
                                <ProductTitle title={''} className="text-white"/>
                                <ProductButtons className="custom-buttons" />
                                <button onClick={ reset }>Reset</button>
                                {/* { JSON.stringify( args, null, 3 ) } */}
                                <button onClick={ () => increaseOrDecreaseBy(-2) }> - 2 </button>
                                {
                                    (!isMaxCountReached && <button onClick={ () => increaseOrDecreaseBy(+2) }> + 2 </button>)
                                }
                                
                                <span> {count} || { maxCount } </span>
                            </>
                        )
                    }
                </ProductCard>

        </div>
    )
}

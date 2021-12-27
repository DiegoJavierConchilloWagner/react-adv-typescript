import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import '../styles/custom-styles.css'
const product = {
    id: '1',
    title: 'Coffe Mug - Card',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>ShoppingPage</h1>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard product={product} className="bg-dark">
                    <ProductImage className="custom-image" />
                    <ProductTitle title={''} className="text-white"/>
                    <ProductButtons className="custom-buttons" />
                </ProductCard>

                <ProductCard product={product} className="bg-dark" >
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title title={''} className="text-white" />
                    <ProductCard.Buttons className="custom-buttons"/>
                </ProductCard>

                <ProductCard product={product} style={{ 
                    backgroundColor: '#70D1F8'
                }}>
                    <ProductImage style={{backgroundColor: '#70D1F8'}}/>
                    <ProductTitle title={''} style={{backgroundColor: '#70D1F8'}} />
                    <ProductButtons style={{backgroundColor: '#70D1F8'}}/>
                </ProductCard>
            </div>
            
        </div>
    )
}

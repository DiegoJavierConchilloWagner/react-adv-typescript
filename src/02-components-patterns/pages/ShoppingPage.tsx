import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'

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
                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle title={''} />
                    <ProductButtons  />
                </ProductCard>

                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title={''}/>
                    <ProductCard.Buttons />
                </ProductCard>
            </div>
            
        </div>
    )
}

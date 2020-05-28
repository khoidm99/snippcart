import Product, { IProduct } from './View'

interface IProductListProps {
  products: IProduct[]
}

interface IProductListPropsView {
  productsListView: IProduct[]
}

const ProductList = (props: IProductListProps) => {
  return (
    <div className='product-list'>
      {props.products.map((product, index) => (
        <Product product={product} key={index} />
      ))}
    </div>
  )
}

export default ProductList

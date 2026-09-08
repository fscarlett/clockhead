import ProductCard from './ProductCard'
import styles from '../styles/Products.module.css'

import productList from '../data/product_list.json'

// TODO: Add an order prop to allow different ordering of products, e.g., by (price), name, default, or sale status.

function Products() {
  return (
    <div className={styles['products-wrapper']}>
      {productList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
export default Products

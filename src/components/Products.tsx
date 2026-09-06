import ProductCard from './ProductCard'
import styles from '../styles/Products.module.css'

function Products() {
  return (
    <div className={styles['products-wrapper']}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  )
}
export default Products

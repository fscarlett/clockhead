import styles from '../styles/ProductCard.module.css'

function ProductCard() {
  return (
    <div className={styles['product-card']}>
      <div className={styles['product-card-header']}>
        <p>pills and badges</p>
      </div>
      <div className={styles['product-card-body']}>
        <h2>product name</h2>
        <p>product description</p>
      </div>
      <div className={styles['product-card-image-wrapper']}>
        <img src='/hello-kitty-wall-clock-small.png' alt='default product' />
      </div>
    </div>
  )
}
export default ProductCard

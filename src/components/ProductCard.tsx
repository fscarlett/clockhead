import styles from '../styles/ProductCard.module.css'

function ProductCard({
  product,
}: {
  product: {
    id: number
    name: string
    description: string
    image: string
    tags?: string[]
    price: number
  }
}) {
  const productImage = product.image || '/hello-kitty-wall-clock-small.png' // Default image if none provided
  return (
    <div className={styles['product-card']}>
      <div className={styles['product-card-header']}>
        <p>{product.tags?.join(', ')}</p>
      </div>
      <div className={styles['product-card-body']}>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>
      <div className={styles['product-card-image-wrapper']}>
        <img src={productImage} alt={product.name} />
      </div>
    </div>
  )
}
export default ProductCard

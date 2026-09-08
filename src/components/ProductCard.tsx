import { Link } from 'react-router'
import styles from '../styles/ProductCard.module.css'

function ProductCard({
  product,
}: {
  product: {
    id: number
    name: string
    description: string
    price: number
    tags?: string[]
    sale: boolean
    image: string
  }
}) {
  const productImage = product.image || '/hello-kitty-wall-clock-small.png' // Default image if none provided
  return (
    <div>
      <Link
        to={`/product/${product.id}`}
        className={styles['product-card-link']}
      >
        <div className={styles['product-card']}>
          <div className={styles['product-card-header']}>
            <div className={styles['tags-wrapper']}>
              {product.tags?.map((tag) => (
                <span key={tag} className={styles['product-card-tag']}>
                  {tag}
                </span>
              ))}
            </div>
            {product.sale && (
              <span className={styles['product-card-sale']}>On Sale</span>
            )}
          </div>
          <div className={styles['product-card-body']}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
          <div className={styles['product-card-image-wrapper']}>
            <img src={productImage} alt={product.name} />
          </div>
        </div>
      </Link>
    </div>
  )
}
export default ProductCard

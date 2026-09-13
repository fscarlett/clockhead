import { Link } from 'react-router'
import styles from '../styles/ProductCard.module.css'

const bgArray = [
  'var(--a7)',
  'var(--accent)',
  'var(--a3)',
  'var(--a4)',
  'var(--a6)',
]

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
  const productBg = bgArray[product.id % bgArray.length]

  const productImage = product.image || '/hello-kitty-wall-clock-small.png' // Default image if none provided

  const cardStyle = {
    backgroundColor: productBg,
  }

  return (
    <div>
      <Link
        to={`/product/${product.id}`}
        className={styles['product-card-link']}
      >
        <div className={`${styles['product-card']}`} style={cardStyle}>
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

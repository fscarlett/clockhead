import { useParams } from 'react-router'
import productList from '../data/product_list.json'
import styles from '../styles/Product.module.css'

function ProductPage() {
  const { productId } = useParams<{ productId: string }>()
  const pId = parseInt(productId, 10) || ''

  const product = productList.find((p) => p.id === pId)

  return (
    <main className='main'>
      <div className='container'>
        <p className='tagline'>clockhead</p>
        {product?.sale && <div className={styles['sale-badge']}>sale</div>}

        <h1>{product?.name}</h1>
        <div className={styles['tags-wrapper']}>
          {product?.tags.map((tag) => (
            <span key={tag} className={styles['tag']}>
              {tag}
            </span>
          ))}
        </div>
        <p className={styles['description']}>{product?.description}</p>
        <div className={styles['product-image-wrapper']}>
          <img
            src={product?.image}
            alt={product?.name}
            className={styles['product-image']}
          />
        </div>
        <p className={styles['price']}>${product?.price}</p>
        <button className={styles['add-to-cart-button']}>Add to Cart</button>
      </div>
    </main>
  )
}
export default ProductPage

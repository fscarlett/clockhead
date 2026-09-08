import { Link } from 'react-router'
import styles from '../styles/PostCard.module.css'

async function PostCard({ id }: { id: number }) {
  const post = {
    id: id,
    title: 'Tick Tock Clockhead',
    excerpt: 'this is the dummmmmy excerpt',
    image: '/hello-kitty-wall-clock-small.png',
  }

  return (
    <div className={styles['post-card-wrapper']}>
      <Link to='/blog' className={styles['post-card-link']}>
        <div className={styles['post-card']}>
          <div className={styles['post-card-image-wrapper']}>
            <img
              className={styles['post-card-image']}
              src={post.image}
              alt={post.title}
            />
          </div>
          <div className={styles['post-card-content-wrapper']}>
            <div className={styles['post-card-header']}>
              <h2>{post.title}</h2>
            </div>
            <div className={styles['post-card-body']}>
              <p>{post.excerpt}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
export default PostCard

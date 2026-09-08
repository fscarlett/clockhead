import PostCard from './PostCard'
import styles from '../styles/Posts.module.css'

function Posts() {
  return (
    <div className={styles['posts-wrapper']}>
      {[...Array(6)].map((_, i) => (
        <PostCard key={i} id={i + 1} />
      ))}
    </div>
  )
}
export default Posts

import { Link } from 'react-router'
import { useState, useEffect } from 'react'
import styles from '../styles/PostCard.module.css'

function PostCard({ id }: { id: number }) {
  const [fetchTitle, setFetchTitle] = useState('')
  const [fetchExcerpt, setFetchExcerpt] = useState('')
  const [loadingTitle, setLoadingTitle] = useState(true)
  const [loadingExcerpt, setLoadingExcerpt] = useState(true)

  const post = {
    id: id,
    title: '...',
    excerpt: '...',
    image: '/hello-kitty-wall-clock-small.png',
  }
  useEffect(() => {
    fetch('https://random-word-api.herokuapp.com/word?number=5&length=4&diff=1')
      .then((response) => response.json())
      .then((data) => {
        setFetchTitle(data.join(' '))
        setLoadingTitle(false)
      })
      .catch((error) => console.error('Error:', error))

    fetch('https://random-word-api.herokuapp.com/word?number=15&diff=1')
      .then((response) => response.json())
      .then((data) => {
        setFetchExcerpt(data.join(' '))
        setLoadingExcerpt(false)
      })
      .catch((error) => console.error('Error:', error))
  }, [])

  post.title = loadingTitle ? post.title : fetchTitle
  post.excerpt = loadingExcerpt ? post.excerpt : fetchExcerpt

  return (
    <div className={styles['post-card-wrapper']}>
      <Link
        to={`/blog/${post.id}/?t=${post.title}&e=${post.excerpt}`}
        className={styles['post-card-link']}
      >
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
              <p>{post.excerpt} </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
export default PostCard

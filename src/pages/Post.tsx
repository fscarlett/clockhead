import { useParams, useSearchParams } from 'react-router'

import { useState, useEffect } from 'react'

import styles from '../styles/Post.module.css'

function PostPage() {
  const [fetchBody, setFetchBody] = useState('')
  const [loadingBody, setLoadingBody] = useState(true)
  const { id } = useParams()

  const [searchParams] = useSearchParams()
  const titleFromQuery = searchParams.get('t')
  const excerptFromQuery = searchParams.get('e')

  const post = {
    id: id,
    title: '...',
    excerpt: '...',
    body: '- - -',
    image: '/hello-kitty-wall-clock-small.png',
  }

  useEffect(() => {
    fetch('https://random-word-api.herokuapp.com/word?number=60&diff=1')
      .then((response) => response.json())
      .then((data) => {
        setFetchBody(data.join(' '))
        setLoadingBody(false)
      })
      .catch((error) => console.error('Error:', error))
  }, [])

  post.body = loadingBody ? post.body : fetchBody

  return (
    <main className='main'>
      <div className='container'>
        <p className='tagline'>clockhead blog</p>
        <h1 className={styles['post-title']}>
          {titleFromQuery ?? post.title + ' ' + post.id}
        </h1>
        <div className={styles['post-content-wrapper']}>
          <img src={post.image} alt={post.title} width='300' height='300' />
          <p className={styles['post-body']}>
            {(excerptFromQuery ?? post.excerpt) + ' ' + post.body}
          </p>
        </div>
      </div>
    </main>
  )
}
export default PostPage

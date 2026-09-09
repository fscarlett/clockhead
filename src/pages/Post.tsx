// import { useParams } from 'react-router'

function PostPage() {
  // const { id } = useParams()

  const post = {
    title: 'Sample Post Title',
    excerpt: 'This is a sample excerpt for the post.',
    image: '/hello-kitty-wall-clock-small.png',
  }

  return (
    <main className='main'>
      <div className='container'>
        <p className='tagline'>clockhead blog</p>
        <h1>{post.title}</h1>
        <p>{post.excerpt}</p>
        <img src={post.image} alt={post.title} width='300' height='300' />
      </div>
    </main>
  )
}
export default PostPage

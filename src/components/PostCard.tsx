import { Link } from 'react-router'

function PostCard({ id }: { id: number }) {
  const post = {
    id: id,
    title: "Time's up",
    excerpt: 'this is the dummy excerpt',
    image: '/hello-kitty-wall-clock-small.png',
  }

  return (
    <div>
      <Link to='/blog' className='post-card-link'>
        <div className='post-card'>
          <div className='post-card-image-wrapper'>
            <img src={post.image} alt={post.title} />
          </div>
          <div className='post-card-header'>
            <h2>{post.title}</h2>
          </div>
          <div className='post-card-body'>
            <p>{post.excerpt}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
export default PostCard

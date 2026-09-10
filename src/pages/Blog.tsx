import Posts from '../components/Posts'

function BlogPage() {
  return (
    <main className='main'>
      <div className='container'>
        <p className='tagline'>right on time</p>
        <h1>Blog</h1>
        <div className='content-wrapper'>
          <Posts />
        </div>
      </div>
    </main>
  )
}
export default BlogPage

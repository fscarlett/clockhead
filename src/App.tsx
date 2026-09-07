import './App.css'
import Products from './components/Products'

function App() {
  return (
    <>
      <main className='main'>
        <div className='container'>
          <p className='tagline'>what time is it</p>
          <h1>It's Clockhead Time</h1>
          <Products />
        </div>
      </main>
    </>
  )
}

export default App

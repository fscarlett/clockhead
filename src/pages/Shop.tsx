import Products from '../components/Products'

function ShopPage() {
  return (
    <main className='main'>
      <div className='container'>
        <p className='tagline'>it's buyin time</p>
        <h1>Buy Some Clocks</h1>
        <Products />
      </div>
    </main>
  )
}
export default ShopPage

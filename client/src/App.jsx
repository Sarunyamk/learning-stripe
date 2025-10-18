import { useEffect } from 'react'
import CartItems from './components/CartItems'
import Header from './components/Header'
import Items from './components/Items'

function App() {
  //state open cart

  //state cartItems

  //function add to cart + state

  //function update item

  useEffect(() => {
    const query = new URLSearchParams(window.location.search)
    const status = query.get('status')

    if (status === 'success') {
      alert('✅ ชำระเงินสำเร็จแล้ว')
    } else if (status === 'cancel') {
      alert('❌ ยกเลิกการชำระเงิน')
    }
    if (status) {
      const url = new URL(window.location.href)
      url.searchParams.delete('status')
      window.history.replaceState({}, '', url)
    }
  }, [])
  return (
    <div>
      <Header />
      <CartItems />
      <Items />
    </div>
  )
}

export default App

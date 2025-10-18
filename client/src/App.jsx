import { useEffect } from 'react'
import CartItem from './components/CartItem'
import Header from './components/Header'
import Item from './components/Item'

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
      <CartItem />
      <Item />
    </div>
  )
}

export default App

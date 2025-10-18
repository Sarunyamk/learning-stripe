import { HandCoins } from 'lucide-react'
import { ButtonIcon } from './Button'

export default function CartItems() {
  //if cart is not open

  //state loading

  //total item

  //total amount

  //function click to pay
  const handlePay = async () => {
    try {
      console.log('item')
    } catch (error) {
      console.log(error)
    } finally {
      console.log('item')
    }
  }

  return (
    <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-4 z-50 overflow-y-auto">
      <div className="flex justify-between mb-4">
        <h2 className="font-bold text-lg">ตะกร้าสินค้า</h2>
        <ButtonIcon title="❌" />
      </div>
      {/* ถ้าไม่มีตะกร้าสินค้า */}

      <ul className="space-y-3">
        {/* map cartItems */}

        <li className="flex flex-col gap-1 text-sm border-b pb-3">
          <div className="flex justify-between">
            <span className="font-medium">ชื่อสินค้า</span>
            <span>฿ราคารวมของสินค้า</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ButtonIcon
                title="-"
                className="w-6 h-6 bg-gray-200 hover:bg-gray-300"
              />
              <span className="w-6 text-center">{'Qty'}</span>
              <ButtonIcon
                title="+"
                className="w-6 h-6 bg-gray-200 hover:bg-gray-300"
              />
            </div>
          </div>
        </li>
      </ul>
      <div>
        <h3>ยอดรวมสินค้า: </h3>
        <h3>ยอดรวมราคา: ฿</h3>
      </div>
      <div className="mt-4">
        <ButtonIcon
          className="bg-blue-600 hover:bg-blue-700"
          title={'ชําระเงิน'}
          icon={HandCoins}
          disabled={''}
          onClick={handlePay}
        />
      </div>
    </div>
  )
}

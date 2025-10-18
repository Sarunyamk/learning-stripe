import { ShoppingCart } from 'lucide-react'
const Header = () => {
  //total item

  return (
    <div className="flex justify-between p-6 items-center bg-white shadow">
      <div className="text-xl font-bold">🛒 Shop</div>
      {/* onClick open cart */}
      <div className="relative cursor-pointer">
        <ShoppingCart className="w-7 h-7" />

        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
          {/* {totalItem} */}
        </span>
      </div>
    </div>
  )
}

export default Header

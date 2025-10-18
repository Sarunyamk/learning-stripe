import { ButtonCustom } from './Button'

const Items = () => {
  return (
    <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto mt-10">
      {/* map items */}

      <div className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/60 backdrop-blur-sm rounded-lg overflow-hidden">
        <div className="relative overflow-hidden">
          <img
            src={''}
            alt={'ชื่อสินค้า'}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
            {'ประเภทสินค้า'}
          </span>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
            {'ชื่อสินค้า'}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-3 mb-4">
            {'รายละเอียดสินค้า'}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-green-600">
              ฿ {'ราคาสินค้า'}
            </span>
          </div>
        </div>

        <div className="p-6 pt-0">
          <ButtonCustom title="เพิ่มเข้าตะกร้าสินค้า" />
        </div>
      </div>
    </div>
  )
}

export default Items

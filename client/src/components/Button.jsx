export const ButtonCustom = ({
  className = 'bg-green-600 hover:bg-green-700',
  title = '',
  onClick,
  disabled = false,
}) => {
  const baseClass =
    'w-full cursor-pointer text-white px-4 py-3 rounded-lg flex items-center justify-center group'
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClass} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${className}`}
    >
      {title}
    </button>
  )
}
export const ButtonIcon = ({
  icon: Icon,
  title = '',
  onClick,
  disabled = false,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-2 py-1 rounded text-sm flex items-center justify-center cursor-pointer ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${className}`}
    >
      {Icon && <Icon className="h-4 w-4 mr-1" />}
      {title}
    </button>
  )
}

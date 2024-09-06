import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem,
    addItem: (item: MenuItem) => void
}

export default function MenuItem({item, addItem}: MenuItemProps) {
  
  const {name, price} = item

  return (
    <button 
        className="border-2 rounded-lg border-teal-400 w-full p-3 flex justify-between transition-all hover:bg-teal-200"
        onClick={() => addItem(item)}
    >
        <h2>{name}</h2>
        <p className="font-black">${price}</p>
    </button>
  )
}

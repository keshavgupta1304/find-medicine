import React from 'react'

interface FilterProps {
  minPrice: number
  setMinPrice: (price: number) => void
  maxPrice: number
  setMaxPrice: (price: number) => void
}

const Filter: React.FC<FilterProps> = ({ minPrice, setMinPrice, maxPrice, setMaxPrice }) => {
  return (
    <div className="flex space-x-4">
      <input
        type="number"
        value={minPrice}
        onChange={(e) => setMinPrice(Number(e.target.value))}
        className="p-2 border border-gray-300 rounded-md"
        placeholder="Min Price"
      />
      <input
        type="number"
        value={maxPrice}
        onChange={(e) => setMaxPrice(Number(e.target.value))}
        className="p-2 border border-gray-300 rounded-md"
        placeholder="Max Price"
      />
    </div>
  )
}

export default Filter

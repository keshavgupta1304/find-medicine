import React from 'react'

interface SortProps {
  sortKey: string
  setSortKey: (key: string) => void
  sortOrder: 'asc' | 'desc'
  setSortOrder: (order: 'asc' | 'desc') => void
}

const Sort: React.FC<SortProps> = ({ sortKey, setSortKey, sortOrder, setSortOrder }) => {
  return (
    <div className="flex space-x-4">
      <select
        value={sortKey}
        onChange={(e) => setSortKey(e.target.value)}
        className="p-2 border border-gray-300 rounded-md"
      >
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
        className="p-2 border border-gray-300 rounded-md"
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  )
}

export default Sort

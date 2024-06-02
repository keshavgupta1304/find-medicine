import React from 'react'

interface SearchBarProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full p-2 border border-gray-300 rounded-md"
      placeholder="Search for medicines..."
    />
  )
}

export default SearchBar

"use client"
import React, { useState } from 'react'
import MedicineCard from '../components/MedicineCard'
import Pagination from '../components/Pagination'
import SearchBar from '../components/SearchBar'
import Filter from '../components/Filter'
import Sort from '../components/Sort'
import { medicines } from '../utils/data'
import { Medicine } from '../types'
import Layout from './layout'

const ITEMS_PER_PAGE = 10

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [minPrice, setMinPrice] = useState<number>(0)
  const [maxPrice, setMaxPrice] = useState<number>(Infinity)
  const [sortKey, setSortKey] = useState<string>('name')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

  const filteredMedicines = medicines
    .filter(med => med.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter(med => med.price >= minPrice && med.price <= maxPrice)
    .sort((a, b) => {
      if (sortKey === 'price') {
        return sortOrder === 'asc' ? a.price - b.price : b.price - a.price
      } else {
        return sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
      }
    })

  const totalPages = Math.ceil(filteredMedicines.length / ITEMS_PER_PAGE)
  const displayedMedicines = filteredMedicines.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  return (
    <Layout>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="flex space-x-4 mt-4">
        <Filter minPrice={minPrice} setMinPrice={setMinPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice} />
        <Sort sortKey={sortKey} setSortKey={setSortKey} sortOrder={sortOrder} setSortOrder={setSortOrder} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {displayedMedicines.map(med => (
          <MedicineCard key={med.id} {...med} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </Layout>
  )
}

export default HomePage

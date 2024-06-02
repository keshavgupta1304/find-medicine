import React from 'react'

interface MedicineCardProps {
  name: string
  price: number
  manufacturer: string
}

const MedicineCard: React.FC<MedicineCardProps> = ({ name, price, manufacturer }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold">{name}</h2>
      <p>Price: ${price}</p>
      <p>Manufacturer: {manufacturer}</p>
    </div>
  )
}

export default MedicineCard

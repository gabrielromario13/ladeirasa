import React from 'react'
import { useParams } from 'react-router-dom'

const Products = () => {
  const { category, subCategory } = useParams()
  return (
    <div>
      PRODUTO: {category} subProduto: {subCategory}
    </div>
  )
}

export default Products;
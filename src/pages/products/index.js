import React from 'react'
import { useParams } from 'react-router-dom'
import MediaCard from '../../components/Card'

const Products = () => {
  const { category, subCategory } = useParams()
  return (
    <div>
      PRODUTO: {category} subProduto: {subCategory}
      <MediaCard />
    </div>
  )
}

export default Products;
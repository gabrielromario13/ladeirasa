import React from 'react'
import { useParams } from 'react-router-dom'
import Card from '../../components/Card'

const mockReturnBack = [
  {
    price: 120,
    description: "Shape quebra facil"
  },
  {
    price: 320,
    description: "Shape Plan B"
  },
  {
    price: 280,
    description: "Shape Almost"
  },
  {
    price: 200,
    description: "Shape Bom"
  },
  {
    price: 800,
    description: "Shape Flip p2"
  }
]

const Products = () => {
  // const { category, subCategory } = useParams()
  return (
    <div>
      {
        mockReturnBack.map((product, index) => (
          <Card key={index} price={product.price} description={product.description} />
        ))
      }
    </div>
  )
}

export default Products;
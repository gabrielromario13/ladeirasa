import React from 'react'
// import { useParams } from 'react-router-dom'
import Card from '../../components/Card'
import * as S from './styled'
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
    <S.WrapperGrid>
      {
        mockReturnBack.map((product, index) => (
          <Card key={index} price={product.price} description={product.description} />
        ))
      }
    </S.WrapperGrid>
  )
}

export default Products;
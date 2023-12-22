import React from 'react'
import useProducts from './useProducts'
import { Button, Card, CardBody, CardImg, CardSubtitle, CardTitle } from 'reactstrap';


const Product = ({ product }) => {

  const image = product.attributes.images.data[0].attributes;

  return (
    <Card >
      <div className='product'>
        <CardImg
          src={`http://localhost:1337${image.url}`}
          alt={image.name}
        />
      </div>
      <CardBody>
        <CardTitle className='fw-bolder fs-4'>
          {product.attributes.name}
        </CardTitle>
        <CardSubtitle className='fs-6 mb-3 fw-lighter'>
          {product.attributes.description}
        </CardSubtitle>
        <CardSubtitle>
          <strong>
            € {product.attributes.price} EUR
          </strong>
        </CardSubtitle>
        <Button color='dark' outline className='mt-3'>Add to Cart</Button>
      </CardBody>
    </Card>
  )
}

export default Product
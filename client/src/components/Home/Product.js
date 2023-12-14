import React from 'react'
import useProducts from './useProducts'
import { Card, CardBody, CardImg, CardSubtitle, CardTitle } from 'reactstrap';


const Product = ({product}) => {

  const image = product.attributes.images.data[0].attributes;

  return (
    <Card >
      <CardImg 
      top
      width='100%'
      alt={image.name}
      src={`http://localhost:1337${image.url}`}
      />
      <CardBody>
        <CardTitle>
          {product.attributes.name}
        </CardTitle>
        <CardSubtitle>
          <strong>
            Price: €{product.attributes.price}
          </strong>
        </CardSubtitle>
      </CardBody>
    </Card>
  )
}

export default Product
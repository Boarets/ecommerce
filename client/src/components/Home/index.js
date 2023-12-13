import React from 'react'
import CustomNav from '../CustomNav'
import { userData } from '../../helpers'
import useProducts from './useProducts'
import { Col, Row } from 'reactstrap'
import Product from './Product'

const Home = () => {
  const { username } = userData()

  const { categories, products } = useProducts();

  return (
    <div>
      <CustomNav />
      <div>
        <h2 className='text-center'>Welcome {username}, Enjoy our sales!</h2>
        {
          categories.length &&
          categories.map((category) => {
            const hasProducts = products.filter(
              (product) => product.attributes.category.data.id === category.id
            );
            return hasProducts && hasProducts.length ? (
              <div key={category.id}>
                <h2>{category.attributes.name}</h2>
                <Row>
                  {hasProducts.map((product) => (
                    <Col key={product.id}>
                      <Product product={product} />
                    </Col>
                  ))}
                </Row>
              </div>
            ) : null;
          })
        }
      </div>
    </div>
  )
}

export default Home

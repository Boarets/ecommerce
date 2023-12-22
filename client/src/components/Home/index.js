import React from 'react'
import CustomNav from '../CustomNav'
import { userData } from '../../helpers'
import useProducts from './useProducts'
import { Col, Container, Row } from 'reactstrap'
import Product from './Product'
import { Link } from 'react-router-dom'

const Home = () => {
  const { categories, products } = useProducts();
  const { username } = userData()

  return (
    <Container>
      <div>
        <h2 className='text-center'>Enjoy our sales!</h2>
        {
          categories.length &&
          categories.map((category) => {
            const hasProducts = products.filter(
              (product) => product.attributes.category.data.id === category.id
            );
            return hasProducts && hasProducts.length ? (
              <div key={category.id} className='mb-5'>
                <h2>{category.attributes.name}</h2>
                <Row>
                  {hasProducts.map((product) => (
                    <Col key={product.id} sm='6' md='3'>
                      <Link to={`/product-details/${product.id}`}>
                        <Product product={product} />
                      </Link>
                    </Col>
                  ))}
                </Row>
              </div>
            ) : null;
          })
        }
      </div>
    </Container>
  )
}

export default Home

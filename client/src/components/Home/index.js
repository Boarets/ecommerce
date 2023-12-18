import React from 'react'
import CustomNav from '../CustomNav'
import { userData } from '../../helpers'
import useProducts from './useProducts'
import { Col, Container, Row } from 'reactstrap'
import Product from './Product'
import { Link } from 'react-router-dom'

const Home = () => {
  const { username } = userData()

  const { categories, products } = useProducts();

  return (
    <Container>
      <div>
        <h2 className='text-center'>Welcome {username}, Enjoy our sales!</h2>
        {
          categories.length &&
          categories.map((category) => {
            const hasProducts = products.filter(
              (product) => product.attributes.category.data.id === category.id
            );
            return hasProducts && hasProducts.length ? (
              <div key={category.id} >
                <h2>{category.attributes.name}</h2>
                <Row >
                  {hasProducts.map((product) => (
                    <Col key={product.id}>
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

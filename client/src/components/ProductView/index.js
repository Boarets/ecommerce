import React from 'react'
import { useProductView } from './useProductView'
import { Card, CardImg, Col, Row } from 'reactstrap';

const ProductView = () => {

    const {
        product,
        getImage,
        selectedSize,
        selectedColor,
        selectedQuantity,
        setSelectedSize,
        handleQuantityChange
    } = useProductView();

    if (!product || !product.attributes) {
        return null;
    }

    const { attributes } = product;
            console.log(attributes.quantity);


    // const quantity = Array.from(Array(Number(attributes.quantity)).keys())

    return (
        <>
         {/* <Card className='product-details'>
            <Row>
                <Col sm='12' md='4'>
                    <Card>
                        <CardImg 
                        top
                        width='100%'
                        src={`http://localhost:1337${getImage(selectedColor)}`}
                        />
                    </Card>
                </Col>
            </Row>

        </Card> */}
        </>
       
    )
}

export default ProductView
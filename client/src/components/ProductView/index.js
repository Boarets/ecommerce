import React from "react";
import { useProductView } from "./useProductView";
import {
  Row,
  Col,
  Card,
  Label,
  Input,
  Button,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  FormGroup,
  CardSubtitle,
} from "reactstrap";

const ProductView = () => {
  const {
    product,
    getImage,
    selectedColor,
    selectedSize,
    selectedQuantity,
    setSelectedColor,
    setSelectedSize,
    handleQuantityChange,
  } = useProductView();
  if (!product || !product.attributes) {
    return null;
  }
  const { attributes } = product;

  const quantity = Array.from(Array(Number(attributes.quantity)).keys());

  return (
    <div className="product-details">
      <Row>
        <Col sm="12" md="6">
          <div className="image-wrapper">
            <CardImg
              left="true"
              width="100%"
              src={`http://localhost:1337${getImage(selectedColor)}`}
              alt=""
            />
          </div>
        </Col>
        <Col sm="12" md="6">
          <CardBody>
            <CardTitle>{attributes.name}</CardTitle>
            <CardText>{attributes.description}</CardText>
            <CardSubtitle>
              <strong>€{attributes.price} EUR</strong>
            </CardSubtitle>
            <CardSubtitle>{attributes.quantity} items Left</CardSubtitle>
            <div>
              <CardSubtitle>Sizes:</CardSubtitle>
              <div className="sizes">
                {attributes.sizes.map((size) => (
                  <span
                    key={size.name}
                    className={`${selectedSize === size.name ? "active" : ""}`}
                    onClick={() => setSelectedSize(size.name)}
                  >
                    {size.name}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <CardSubtitle>Selected color: {selectedColor}</CardSubtitle>
              <div className="colours">
                {attributes.colours.map((color) => (
                  <span
                    key={color.name}
                    className={`${
                      selectedColor === color.name ? "active" : ""
                    }`}
                    onClick={() => setSelectedColor(color.name)}
                  >
                    <img
                      src={`http://localhost:1337${getImage(color.name)}`}
                      alt={color.name}
                    />
                  </span>
                ))}
              </div>
              <FormGroup className="quantity">
                <Label for="exampleSelect">Selected items</Label>
                <Input
                  value={selectedQuantity}
                  type="select"
                  name="quantity"
                  id="exampleSelect"
                  onChange={handleQuantityChange}
                >
                  {quantity.map((number) => (
                    <option key={number}>{number}</option>
                  ))}
                </Input>
              </FormGroup>
            </div>
            <Button color="primary">Add to basket</Button>
          </CardBody>
        </Col>
      </Row>
    </div>
  );
};

export default ProductView;
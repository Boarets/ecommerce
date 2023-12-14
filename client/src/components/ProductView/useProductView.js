// @ts-nocheck
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useProductView = () => {
    const { id: productId } = useParams();
    const [product, setProduct] = useState({})
    const [selectedColor, setSelectedColor] = useState('')
    const [selectedSize, setSelectedSize] = useState('')
    const [selectedQuantity, setSelectedQuantity] = useState(1)

    const handleQuantityChange = ({ target: { value } }) => {
        setSelectedQuantity(value)
    };

    const getImage = (colour) => {
        const attributes = product.attributes || {};
        const imagesData = attributes.images ? attributes.images.data : [];
        const image = attributes.images.data.find(image => image.attributes.name.includes(colour))
        return image.attributes.url || '';
    }
}
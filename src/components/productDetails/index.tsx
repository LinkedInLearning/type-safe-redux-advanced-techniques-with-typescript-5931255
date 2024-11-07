import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/reducers/cartReducer';
import {
  ProductDetailsContainer,
  ProductImage,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  AddToCartButton,
} from './styles';

interface ProductDetailsProps {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export const ProductDetails: FC<ProductDetailsProps> = ({ id, title, price, description, image }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, price, quantity: 1 }));
  };

  return (
    <ProductDetailsContainer>
      <ProductImage src={image} alt={title} />
      <ProductTitle>{title}</ProductTitle>
      <ProductDescription>{description}</ProductDescription>
      <ProductPrice>${price}</ProductPrice>
      <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
    </ProductDetailsContainer>
  );
};

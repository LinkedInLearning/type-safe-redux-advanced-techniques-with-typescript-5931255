import React from 'react';
import { useProductList } from './hooks/useProductList';
import { ProductDetails } from '../productDetails';
import { ProductListContainer, LoadingMessage, ErrorMessage } from './styles';

export const ProductList: React.FC = () => {
  const { products, status, expensiveProducts } = useProductList();

  if (status === 'loading') {
    return <LoadingMessage>Loading...</LoadingMessage>;
  }

  if (status === 'failed') {
    return <ErrorMessage>Failed to load products.</ErrorMessage>;
  }

  return (
    <div>
      <h2>Product List</h2>
      <ProductListContainer>
        {products.map((product) => (
          <ProductDetails
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            image={product.image}
          />
        ))}
      </ProductListContainer>

      <h2>Expensive Products</h2>
      <ProductListContainer>
        {expensiveProducts.map((product) => (
          <ProductDetails
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            image={product.image}
          />
        ))}
      </ProductListContainer>
    </div>
  );
};

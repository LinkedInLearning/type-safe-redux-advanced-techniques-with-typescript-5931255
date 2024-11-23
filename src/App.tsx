import React from 'react';
import styled from 'styled-components';
import { ProductList } from './components/productList'
import { Cart } from './components/cart'
const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const App: React.FC = () => {
  return (
    <AppContainer>
      <h1>Shopping App</h1>
      <ProductList />
      <Cart />
    </AppContainer>
  );
};

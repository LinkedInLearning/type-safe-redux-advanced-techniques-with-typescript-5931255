import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../../../redux/actions/productsActions';
import { selectAllProducts, selectProductListStatus, selectExpensiveProducts } from '../../../redux/selectors/productsSelector';
import { AppDispatch } from '../../../redux/store';

export const useProductList = () => {
  const dispatch = useDispatch<AppDispatch>();

  const products = useSelector(selectAllProducts);
  const status = useSelector(selectProductListStatus);
  const expensiveProducts = useSelector(selectExpensiveProducts);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  return { products, status, expensiveProducts };
};

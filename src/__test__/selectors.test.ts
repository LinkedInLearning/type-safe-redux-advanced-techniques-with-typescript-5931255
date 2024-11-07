import { selectCartTotalItems, selectCartTotalPrice } from '../redux/selectors/cartSelector';
import { selectAllProducts, selectExpensiveProducts } from '../redux/selectors/productsSelector';
import { CartState } from '../redux/reducers/cartReducer';
import { UserState } from '../redux/reducers/userReducer';
import { RootState } from '../redux/store';
import { ProductsState, Product } from '../redux/reducers/productsReducer';

describe('Selectors', () => {
  it('should select total items in the cart - selectCartTotalItems', () => {
    const cartState: CartState = {
      items: [
        { id: 1, price: 100, quantity: 1 },
        { id: 2, price: 200, quantity: 1 },
      ],
      totalPrice: 300,
    };

    const mockState: RootState = {
      cart: cartState,
      user: {} as UserState,
      products: {} as ProductsState,
    };

    expect(selectCartTotalItems(mockState)).toEqual(2);
  });

  it('should select total price of the cart - selectCartTotalPrice', () => {
    const cartState: CartState = {
      items: [
        { id: 1, price: 100, quantity: 1 },
        { id: 2, price: 200, quantity: 1 },
      ],
      totalPrice: 300,
    };

    const mockState: RootState = {
      cart: cartState,
      user: {} as UserState,
      products: {} as ProductsState,
    };

    expect(selectCartTotalPrice(mockState)).toEqual(300);
  });

  it('should select all products from the store - selectAllProducts', () => {
    const products: Product[] = [
      { id: 1, title: 'Product 1', price: 100, description: '', image: '', category: '' },
      { id: 2, title: 'Product 2', price: 200, description: '', image: '', category: '' },
    ];

    const productsState: ProductsState = {
      products,
      status: 'succeeded',
      error: null,
    };

    const mockState: RootState = {
      cart: {} as CartState,
      user: {} as UserState,
      products: productsState,
    };

    expect(selectAllProducts(mockState)).toEqual(products);
  });

  it('should select expensive products from the store - selectExpensiveProducts', () => {
    const products: Product[] = [
      { id: 1, title: 'Product 1', price: 100, description: '', image: '', category: '' },
      { id: 2, title: 'Product 2', price: 2000, description: '', image: '', category: '' },
    ];

    const productsState: ProductsState = {
      products,
      status: 'succeeded',
      error: null,
    };

    const mockState: RootState = {
      cart: {} as CartState,
      user: {} as UserState,
      products: productsState,
    };


    const expensiveProducts = selectExpensiveProducts(mockState);

    expect(expensiveProducts.length).toEqual(1);
    expect(expensiveProducts[0]).toEqual(products[1]);
  });
});

import { createContext, useState, useEffect } from 'react';

// Helper Functions
const addCartItem = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, itemToRemove) => {
  const itemInCart = cartItems.find(
    (cartItem) => cartItem.id === itemToRemove.id
  );

  if (itemInCart.quantity === 1)
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);

  return cartItems.map((cartItem) =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const ProductsContext = createContext({
  products: [],
  categories: [],
  filters: {},
  filteredProducts: [],
  cartItems: [],
  itemsCount: 0,
  cartTotal: 0,
  cartOpen: false,
  setProducts: () => {},
  setCategories: () => {},
  setFilters: () => {},
  updateFilters: (filters) => {},
  setFilteredProducts: () => {},
  setCartOpen: () => {},
  setCartTotal: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [filters, setFilters] = useState({
    maxSpiciness: 3,
  });
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const getCategories = async () => {
      const resp = await fetch('../../categories.json');
      const categories = await resp.json();
      setAllCategories(categories);
    };
    getCategories();
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      const resp = await fetch('../../products-data.json');
      const products = await resp.json();
      setProducts(products);
    };
    getProducts();
  }, []);

  const updateFilters = ({ name, value }) => {
    setFilters({ ...filters, [name]: value });
  };

  useEffect(() => {
    let filteredProducts = products.filter((product) => {
      if (filters.category && product.category !== filters.category)
        return false;

      if (filters.maxSpiciness && product.spiciness > filters.maxSpiciness)
        return false;

      if (filters.noNuts && product.nuts) return false;

      if (filters.vegetarianOnly && !product.vegetarian) return false;

      return true;
    });

    setFilteredProducts(filteredProducts);
  }, [products, filters]);

  const addItemToCart = (itemToAdd) => {
    setCartItems(addCartItem(cartItems, itemToAdd));
  };
  //console.log(cartItems);

  const removeItemFromCart = (itemToRemove) => {
    setCartItems(removeCartItem(cartItems, itemToRemove));
  };

  useEffect(() => {
    const cartItemsCount = cartItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    setItemsCount(cartItemsCount);
  }, [cartItems]);

  useEffect(() => {
    const cartItemsTotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setCartTotal(cartItemsTotal);
  }, [cartItems]);

  const context = {
    products: filteredProducts,
    allCategories,
    filters,
    cartOpen,
    cartItems,
    itemsCount,
    cartTotal,
    setAllCategories,
    updateFilters,
    addItemToCart,
    setCartOpen,
    removeItemFromCart,
  };
  return (
    <ProductsContext.Provider value={context}>
      {children}
    </ProductsContext.Provider>
  );
};

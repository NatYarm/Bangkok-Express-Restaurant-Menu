import { createContext, useState, useEffect } from 'react';

export const ProductsContext = createContext({
  products: [],
  categories: [],
  filters: {},
  filteredProducts: [],
  cartIsEmpty: false,
  setProducts: () => {},
  setCategories: () => {},
  setFilters: () => {},
  updateFilters: (filters) => {},
  setFilteredProducts: () => {},
  setCartIsEmpty: () => {},
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [filters, setFilters] = useState({
    maxSpiciness: 3,
  });
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [cartIsEmpty, setCartIsEmpty] = useState(false);

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

  const context = {
    products: filteredProducts,
    allCategories,
    filters,
    cartIsEmpty,
    setAllCategories,
    updateFilters,
    setCartIsEmpty,
  };
  return (
    <ProductsContext.Provider value={context}>
      {children}
    </ProductsContext.Provider>
  );
};

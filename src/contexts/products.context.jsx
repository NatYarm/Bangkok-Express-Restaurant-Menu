import { createContext, useState, useEffect } from 'react';

export const ProductsContext = createContext({
  products: [],
  categories: [],
  filters: {},
  filteredProducts: [],
  setProducts: () => {},
  setCategories: () => {},
  setFilters: () => {},
  updateFilters: (filters) => {},
  setFilteredProducts: () => {},
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [filters, setFilters] = useState({
    maxSpiciness: 3,
  });
  const [filteredProducts, setFilteredProducts] = useState([]);

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
    // let filteredProducts = products.filter(
    //   (product) => product.spiciness <= filters.maxSpiciness
    // );
    // console.log({ filteredProducts, filters });

    // filteredProducts = filters.noNuts
    //   ? filteredProducts.filter((product) => filters.noNuts !== product.nuts)
    //   : filteredProducts;
    // console.log({ filteredProducts });

    // filteredProducts = filters.vegetarianOnly
    //   ? filteredProducts.filter(
    //       (product) => filters.vegetarianOnly === product.vegetarian
    //     )
    //   : products;
    // console.log({ filteredProducts, filters });

    // filteredProducts = filters.category
    //   ? filteredProducts.filter(
    //       (product) => product?.category === filters.category
    //     )
    //   : filteredProducts;
    // console.log({ filteredProducts, filters });

    const filteredProducts = filters.category
      ? products.filter(
          (product) =>
            filters.category === product.category &&
            filters.vegetarianOnly === product.vegetarian &&
            filters.noNuts !== product.nuts &&
            filters.maxSpiciness >= product.spiciness
        )
      : products;
    console.log({ filteredProducts, filters });

    setFilteredProducts(filteredProducts);
  }, [products, filters]);

  //console.log(filters);

  const context = {
    products: filteredProducts,
    allCategories,
    filters,
    setAllCategories,
    updateFilters,
  };
  return (
    <ProductsContext.Provider value={context}>
      {children}
    </ProductsContext.Provider>
  );
};

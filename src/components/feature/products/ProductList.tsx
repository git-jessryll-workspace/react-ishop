import { useContext } from "react";
import { AppContext } from "../../../context/AppProvider";
import { AppContextType } from "../../../types/app";
import ProductDetails from "./ProductDetails";

const ProductList = () => {
  const { products } = useContext(AppContext) as AppContextType;
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 pb-16 pt-6 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="font-bold text-gray-700 text-2xl md:text-3xl pb-4">Products</h2>
        
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductDetails key={product.id} product={product}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;

import React from 'react';
import AddToCartAndReviews from '../components/AddToCartAndReviews';

import ProdutHeroSection from '../components/ProductHeroSection';
import ProductCatogery from '../components/ProductCatogery';

const Product = () => {
  return (
    <>
      <div className="robotofont">
        <ProdutHeroSection />
        <AddToCartAndReviews />
        <ProductCatogery />
      </div>
    </>
  );
};

export default Product;

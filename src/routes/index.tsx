import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';

// Routes imports
import Home from '../pages/Home';
import Testimonial from '../pages/Testimonial';
import Blog from '../pages/Blog/Home/';
import Products from '../pages/Products/Home/';
import Contact from '../pages/Contact';



const Router: React.FC = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/testimonials" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>

  );
}

export default Router;
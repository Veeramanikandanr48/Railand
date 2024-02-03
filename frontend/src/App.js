// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import LandingPage from './components/LandingPage/LandingPage';
import BlogPage from './components/Blog/Blog';
import BlogPostDetail from './components/Blog/BlogPost';
import AdminBlog from './components/Blog/AdminBlog';
import ServicesPage from './components/Services/Services';

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostDetail/>} />
        <Route path='/adminblog' element={<AdminBlog/>}/>
        <Route path='/services' element={<ServicesPage/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

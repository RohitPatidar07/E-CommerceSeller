import React from 'react'
import Footer from "./Footer";
import Navbar from "./Navbar";
import orderManagementImg from "../../assets/Image1.jpeg";
import shippingImg from "../../assets/Image2.jpeg";
import inventoryImg from "../../assets/Image3.jpeg";
import shippingAggregatorsImg from "../../assets/Image4.jpeg";
import marketplaceRankingsImg from "../../assets/Image5.jpeg";
import customerLoyaltyImg from "../../assets/Image6.jpeg";
import workflowImg from "../../assets/Image7.jpeg";
import returnsImg from "../../assets/Image8.jpeg";
import analyticsImg from "../../assets/Image9.jpeg";
import "./Blog.css";
const Blog = () => {
  return (
    <div className="">
    <Navbar/>
    <div className="p-5 mt-5">
      {/* Hero Section */}
      <section className="">
        <div className="col-12 text-center">
          <h1 className="ecommerce-hero-title display-4 fw-bold mb-3">
            E-Commerce Growth Starts With Smart Tools
          </h1>
          <p className="ecommerce-hero-subtitle fs-5 text-muted col-md-8 mx-auto">
            Discover expert insights, proven strategies, and actionable tips to scale your e-commerce business with the right tools and techniques.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="ecommerce-breadcrumb mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#" className="text-decoration-none">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">Blog</li>
        </ol>
      </nav>

      {/* Main Content Area */}
      <div className="row">
        {/* Blog Posts Grid - Takes 8 columns on large screens */}
        <div className="col-lg-8">
          <div className="row row-cols-1 row-cols-md-2 g-4 ecommerce-blog-grid mb-5">
            {/* Blog Post 1 */}
            <div className="col ecommerce-blog-card">
              <div className="card h-100 border-0 shadow-sm">
                <img 
                  src={orderManagementImg} 
                  className="card-img-top ecommerce-blog-image" 
                  alt="Order Management" 
                />
                <div className="card-body">
                  <span className="badge bg-primary bg-opacity-10 text-primary mb-2 ecommerce-blog-category">Order Management</span>
                  <h3 className="ecommerce-blog-title card-title h5">How to manage orders from multiple marketplaces</h3>
                  <p className="ecommerce-blog-text card-text text-muted">
                    Learn effective strategies to streamline order processing across Amazon, Flipkart, and other major platforms. Discover automation tools that save time and reduce errors.
                  </p>
                  <a href="#" className="btn btn-link text-primary p-0 ecommerce-blog-link">Read More</a>
                </div>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="col ecommerce-blog-card">
              <div className="card h-100 border-0 shadow-sm">
                <img 
                  src={shippingImg} 
                  className="card-img-top ecommerce-blog-image" 
                  alt="Shipping" 
                />
                <div className="card-body">
                  <span className="badge bg-success bg-opacity-10 text-success mb-2 ecommerce-blog-category">Shipping</span>
                  <h3 className="ecommerce-blog-title card-title h5">Why centralized delivery saves time and money</h3>
                  <p className="ecommerce-blog-text card-text text-muted">
                    Discover how consolidating your delivery operations can reduce costs by up to 30% while improving customer satisfaction and operational efficiency.
                  </p>
                  <a href="#" className="btn btn-link text-primary p-0 ecommerce-blog-link">Read More</a>
                </div>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="col ecommerce-blog-card">
              <div className="card h-100 border-0 shadow-sm">
                <img 
                  src={inventoryImg} 
                  className="card-img-top ecommerce-blog-image" 
                  alt="Inventory Management" 
                />
                <div className="card-body">
                  <span className="badge bg-primary bg-opacity-10 text-primary mb-2 ecommerce-blog-category">Order Management</span>
                  <h3 className="ecommerce-blog-title card-title h5">Smart inventory management for growing businesses</h3>
                  <p className="ecommerce-blog-text card-text text-muted">
                    Avoid stockouts and overstock situations with intelligent inventory tracking. Learn how to predict demand and optimize your stock levels.
                  </p>
                  <a href="#" className="btn btn-link text-primary p-0 ecommerce-blog-link">Read More</a>
                </div>
              </div>
            </div>

            {/* Blog Post 4 */}
            <div className="col ecommerce-blog-card">
              <div className="card h-100 border-0 shadow-sm">
                <img 
                  src={shippingAggregatorsImg} 
                  className="card-img-top ecommerce-blog-image" 
                  alt="Shipping Aggregators" 
                />
                <div className="card-body">
                  <span className="badge bg-warning bg-opacity-10 text-warning mb-2 ecommerce-blog-category">Strategic</span>
                  <h3 className="ecommerce-blog-title card-title h5">Top 5 shipping aggregators in India</h3>
                  <p className="ecommerce-blog-text card-text text-muted">
                    Compare the best shipping partners for your e-commerce business. From cost-effectiveness to delivery speed, find the perfect match for your needs.
                  </p>
                  <a href="#" className="btn btn-link text-primary p-0 ecommerce-blog-link">Read More</a>
                </div>
              </div>
            </div>

            {/* Blog Post 5 */}
            <div className="col ecommerce-blog-card">
              <div className="card h-100 border-0 shadow-sm">
                <img 
                  src={marketplaceRankingsImg} 
                  className="card-img-top ecommerce-blog-image" 
                  alt="Marketplace Rankings" 
                />
                <div className="card-body">
                  <span className="badge bg-info bg-opacity-10 text-info mb-2 ecommerce-blog-category">Marketplace Tips</span>
                  <h3 className="ecommerce-blog-title card-title h5">Boost your marketplace rankings with these proven tactics</h3>
                  <p className="ecommerce-blog-text card-text text-muted">
                    Master the art of marketplace optimization with insider tips on keyword research, product photography, and customer engagement strategies.
                  </p>
                  <a href="#" className="btn btn-link text-primary p-0 ecommerce-blog-link">Read More</a>
                </div>
              </div>
            </div>

            {/* Blog Post 6 */}
            <div className="col ecommerce-blog-card">
              <div className="card h-100 border-0 shadow-sm">
                <img 
                  src={customerLoyaltyImg} 
                  className="card-img-top ecommerce-blog-image" 
                  alt="Customer Loyalty" 
                />
                <div className="card-body">
                  <span className="badge bg-info bg-opacity-10 text-info mb-2 ecommerce-blog-category">Marketplace Tips</span>
                  <h3 className="ecommerce-blog-title card-title h5">Building customer loyalty through exceptional service</h3>
                  <p className="ecommerce-blog-text card-text text-muted">
                    Transform one-time buyers into loyal customers with proven service strategies. Learn how to handle complaints and exceed expectations.
                  </p>
                  <a href="#" className="btn btn-link text-primary p-0 ecommerce-blog-link">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>

   
        {/* Sidebar - Takes 4 columns on large screens */}
        <div className="col-lg-4">
          <div className="ecommerce-sidebar ps-lg-4">
            {/* Search Bar */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body">
                <div className="input-group ecommerce-search-bar">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search articles..." 
                    aria-label="Search articles"
                  />
                  {/* <button className="btn btn-primary" type="button">
                    <i className="bi bi-search"></i>
                  </button> */}
                </div>
              </div>
            </div>

            {/* Categories Section */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body">
                <h2 className="ecommerce-sidebar-title h5 fw-bold mb-3">Categories</h2>
                <ul className="list-unstyled">
                  <li className="mb-2 d-flex justify-content-between align-items-center">
                    <a href="#" className="text-decoration-none">All Articles</a>
                    <span className="badge bg-secondary bg-opacity-10 text-secondary">24</span>
                  </li>
                  <li className="mb-2 d-flex justify-content-between align-items-center">
                    <a href="#" className="text-decoration-none">Order Management</a>
                    <span className="badge bg-secondary bg-opacity-10 text-secondary">8</span>
                  </li>
                  <li className="mb-2 d-flex justify-content-between align-items-center">
                    <a href="#" className="text-decoration-none">Shipping</a>
                    <span className="badge bg-secondary bg-opacity-10 text-secondary">10</span>
                  </li>
                  <li className="mb-2 d-flex justify-content-between align-items-center">
                    <a href="#" className="text-decoration-none">Marketplace Tips</a>
                    <span className="badge bg-secondary bg-opacity-10 text-secondary">6</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Popular Articles Section */}
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h2 className="ecommerce-sidebar-title h5 fw-bold mb-3">Popular Articles</h2>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <div className="row g-2 align-items-center mb-2">
                      <div className="col-4">
                        <img 
                          src={workflowImg} 
                          className="img-fluid rounded ecommerce-popular-image" 
                          alt="Automate workflow" 
                        />
                      </div>
                      <div className="col-8">
                        <a href="#" className="text-decoration-none fw-bold">Automate your e-commerce workflow</a>
                        <p className="text-muted small mb-0">5 min read</p>
                      </div>
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="row g-2 align-items-center mb-2">
                      <div className="col-4">
                        <img 
                          src={returnsImg} 
                          className="img-fluid rounded ecommerce-popular-image" 
                          alt="Handling returns" 
                        />
                      </div>
                      <div className="col-8">
                        <a href="#" className="text-decoration-none fw-bold">Handling returns like a pro</a>
                        <p className="text-muted small mb-0">7 min read</p>
                      </div>
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="row g-2 align-items-center mb-2">
                      <div className="col-4">
                        <img 
                          src={analyticsImg} 
                          className="img-fluid rounded ecommerce-popular-image" 
                          alt="Analytics growth" 
                        />
                      </div>
                      <div className="col-8">
                        <a href="#" className="text-decoration-none fw-bold">Analytics that drive growth</a>
                        <p className="text-muted small mb-0">6 min read</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      {/* CTA Section */}
      <section className="row ecommerce-cta bg-primary text-white py-5 rounded-3 mb-4">
        <div className="col-12 text-center">
          <h2 className="ecommerce-cta-title display-6 fw-bold mb-3">Simplify your e-commerce with our platform</h2>
          <p className="ecommerce-cta-text fs-5 mb-4 col-md-8 mx-auto">
            Join thousands of successful sellers who trust our tools to manage orders, shipping, and growth across all major marketplaces.
          </p>
          <button className="btn btn-light btn-lg px-4 py-2 ecommerce-cta-button">Start Free Trial</button>
        </div>
      </section>
    </div>
    <Footer/>
  </div>
  )
}

export default Blog
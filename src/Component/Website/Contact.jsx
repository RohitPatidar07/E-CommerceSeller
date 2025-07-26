
import React from 'react'
import Footer from "./Footer";
import Navbar from "./Navbar";

import { Container, Card, ListGroup, Button, Row, Col, Image } from 'react-bootstrap';
const Contact = () => {
  return (
    <div className="min-vh-100 bg-white pt-5">
    <Navbar/>

      {/* Contact Section */}

        <div className="container p-2 mt-3">
          <div className="text-center mb-5">
            <h2 className="text-dark fs-1 fw-bold mb-3">Get in Touch</h2>
            <p className="text-muted fs-5 mx-auto" style={{ maxWidth: "36rem" }}>
              Ready to transform your e-commerce operations? Let's discuss how
              CentralLogix can help your business grow.
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-12 col-lg-6">
              <form className="d-flex flex-column gap-4">
                <div>
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control rounded-button"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control rounded-button"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="form-label">Message</label>
                  <textarea
                    rows={4}
                    className="form-control rounded-button"
                    placeholder="Tell us about your business needs..."
                  ></textarea>
                </div>
                <button 
                  className="btn btn-primary py-3 rounded-button fw-semibold"
                  style={{ border: "none" }}
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="col-12 col-lg-6">
              <div className="d-flex flex-column gap-4">
                <div className="w-100 overflow-hidden rounded-button" style={{ height: "250px" }}>
                  <img
                    src="https://readdy.ai/api/search-image?query=modern%20professional%20business%20team%20working%20together%20in%20bright%20office%20environment%2C%20collaborative%20workspace%2C%20clean%20minimalist%20design%2C%20people%20using%20computers%20and%20technology%2C%20positive%20atmosphere&width=600&height=300&seq=contact-img&orientation=landscape"
                    alt="Contact Us"
                    className="w-100 h-100 object-cover object-top"
                  />
                </div>
                
                <div className="d-flex flex-column gap-4">
                  <div className="d-flex align-items-center">
                    <div className="me-4">
                      <i className="fas fa-map-marker-alt text-primary fs-4"></i>
                    </div>
                    <div>
                      <p className="text-dark fw-medium mb-1">Office Address</p>
                      <p className="text-muted mb-0">
                        123 Business Street, Tech City, TC 12345
                      </p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-center">
                    <div className="me-4">
                      <i className="fas fa-phone text-primary fs-4"></i>
                    </div>
                    <div>
                      <p className="text-dark fw-medium mb-1">Phone</p>
                      <p className="text-muted mb-0">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-center">
                    <div className="me-4">
                      <i className="fas fa-envelope text-primary fs-4"></i>
                    </div>
                    <div>
                      <p className="text-dark fw-medium mb-1">Email</p>
                      <p className="text-muted mb-0">hello@centrallogix.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container p-2">
      <h1 className="mb-4 border-bottom pb-2">Visit Our Office</h1>
      
      <Row className="g-4">
        <Col md={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item className="py-3">
                  <div className="d-flex">
                    <strong className="me-3" style={{ minWidth: '80px' }}>Address</strong>
                    <div>
                      123 Innovation Drive, Suite 400<br />
                      San Francisco, CA 94105
                    </div>
                  </div>
                </ListGroup.Item>
                
                <ListGroup.Item className="py-3">
                  <div className="d-flex">
                    <strong className="me-3" style={{ minWidth: '80px' }}>Phone</strong>
                    <div>+1 (555) 123-4567</div>
                  </div>
                </ListGroup.Item>
                
                <ListGroup.Item className="py-3">
                  <div className="d-flex">
                    <strong className="me-3" style={{ minWidth: '80px' }}>Email</strong>
                    <div>hello@logiflow.com</div>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <div className="h-100">
            <Image 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Office Building" 
              fluid 
              className="rounded shadow-sm w-100 h-100 object-fit-cover"
            />
            <map name="officemap">
              <area shape="rect" coords="100,100,300,300" alt="Main Entrance" title="Main Entrance" />
              <area shape="rect" coords="400,150,500,250" alt="Parking" title="Parking Area" />
            </map>
          </div>
        </Col>
      </Row>

      <hr className="my-4" />

    
    </div> */}

    <Footer/>
  </div>
  );
};

export default Contact;
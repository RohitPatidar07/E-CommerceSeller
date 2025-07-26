import React from 'react'
import Footer from "./Footer";
import Navbar from "./Navbar";


import CountUp from "react-countup";
import { FaShieldAlt, FaLinkedin, FaTwitter, FaGithub,  FaStore, FaGift, FaTshirt, FaHome, FaDesktop} from "react-icons/fa";
import { BsBell } from "react-icons/bs";
import "./About.css";
const About = () => {
  return (
    <div className="min-vh-100 bg-white pt-5">
    <Navbar/>
    <div className="container">
{/* HERO SECTION */}
<div
  className="seller-hero-section mt-3 position-relative d-flex flex-column justify-content-center align-items-center text-center text-white py-5"
  style={{
    minHeight: '50vh', // ⬅️ Reduced height here
    background:
      'linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(https://i.ibb.co/9K7jPWt/acco.webp) center/cover no-repeat',
  }}
>
  <div className="container px-4 px-md-5">
    <h1 className="display-4 fw-bold mb-3 animate__animated animate__fadeInDown">
      Built by <span className="text-warning">Sellers</span>,<br />
      for <span className="text-info">Sellers</span>
    </h1>
    <p className="lead fw-normal mb-4 animate__animated animate__fadeInUp animate__delay-1s">
      We empower online stores to simplify operations and scale faster<br />
      with intelligent logistics solutions.
    </p>
    <div className="d-flex align-items-center justify-content-center gap-2 animate__animated animate__fadeInUp animate__delay-2s">
      <div
        className="bg-light bg-opacity-25 p-2 rounded-circle d-flex justify-content-center align-items-center"
        style={{ width: '40px', height: '40px' }}
      >
        <FaShieldAlt size={18} color="#fff" />
      </div>
      <p className="mb-0 fw-semibold">Trusted by 1000+ sellers worldwide</p>
    </div>
  </div>
</div>


      {/* MISSION SECTION */}
      <div className="mission-section py-5 bg-light">
        <div className="container">
          <div className="row align-items-center gy-4">
            {/* Left Content */}
            <div className="col-lg-6">
              <h2 className="mission-title fw-bold mb-3">Our Mission</h2>
              <p className="mission-description mb-4">
                We empower online stores to simplify operations and scale
                faster by providing intelligent logistics solutions that
                eliminate fulfillment chaos and drive growth.
              </p>
              <div className="d-flex align-items-start gap-3">
                <div className="mission-icon p-3 rounded-circle">
                  <BsBell size={24} color="#0d6efd" />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Scale with Confidence</h6>
                  <p className="mb-0 text-muted">
                    Built for growth, designed for success
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="col-lg-6 text-center">
  <img
    src="https://i.ibb.co/gFgVYxQt/mission.png"
    alt="Dashboard"
    className="img-fluid mission-img shadow rounded"
  />
</div>

          </div>
        </div>
      </div>

         {/* OUR STORY SECTION */}
      <div className="story-section py-5">
        <div className="container">
          <div className="row align-items-center gy-4">
            {/* Image Left */}
            <div className="col-lg-6 text-center">
              <img
                src="https://i.ibb.co/SWLffbd/Story.png"
                alt="Our Story"
                className="img-fluid rounded shadow"
              />
            </div>

            {/* Text Right */}
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">Our Story</h2>

              <div className="d-flex align-items-start mb-4">
                <div className="bg-primary text-white fw-bold rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: '70px', height: '32px' }}>
                  1
                </div>
                <div>
                  <h6 className="fw-bold mb-1">The Problem</h6>
                  <p className="mb-0 text-muted">
                    As e-commerce sellers ourselves, we experienced firsthand the chaos of managing orders, inventory, and shipping across multiple channels.
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-4">
                <div className="bg-primary text-white fw-bold rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: '70px', height: '32px' }}>
                  2
                </div>
                <div>
                  <h6 className="fw-bold mb-1">The Solution</h6>
                  <p className="mb-0 text-muted">
                    We built LogiFlow to solve our own fulfillment nightmares – and discovered thousands of other sellers needed the same solution.
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start">
                <div className="bg-primary text-white fw-bold rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: '70px', height: '32px' }}>
                  3
                </div>
                <div>
                  <h6 className="fw-bold mb-1">The Impact</h6>
                  <p className="mb-0 text-muted">
                    Today, we help over 1000+ sellers streamline their operations, reduce costs, and focus on what they do best – growing their business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MEET THE TEAM  */}
        <div className="team-section py-5 bg-white">
      <div className="container text-center">
        <h2 className="fw-bold mb-3">Meet the Team</h2>
        <p className="text-muted mb-5">
          The passionate founders and core team members who built LogiFlow from the ground up.
        </p>

        <div className="row gy-4">
          {/* Member 1 */}
          <div className="col-md-6 col-lg-4">
            <div className="card border-0 shadow h-100 p-4">
              <img
                src="https://i.ibb.co/Lh5DnG0Q/person1.jpg"
                alt="Michael Chen"
                className="rounded-circle mx-auto mb-3"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
              <h5 className="fw-bold mb-1">Michael Chen</h5>
              <p className="text-primary mb-2">CEO & Co-Founder</p>
              <p className="text-muted mb-3">
                Former Amazon seller who scaled from $0 to $2M ARR. Experienced the pain of logistics chaos firsthand and decided to build the solution.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <a href="#" className="text-dark"><FaLinkedin /></a>
                <a href="#" className="text-dark"><FaTwitter /></a>
              </div>
            </div>
          </div>

          {/* Member 2 */}
          <div className="col-md-6 col-lg-4">
            <div className="card border-0 shadow h-100 p-4">
              <img
                src="https://i.ibb.co/ZRtzf3FN/person2.png"
                alt="Sarah Rodriguez"
                className="rounded-circle mx-auto mb-3"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
              <h5 className="fw-bold mb-1">Sarah Rodriguez</h5>
              <p className="text-primary mb-2">CTO & Co-Founder</p>
              <p className="text-muted mb-3">
                Ex-Shopify engineer with 8+ years building scalable e-commerce infrastructure. Passionate about creating tools that actually work for sellers.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <a href="#" className="text-dark"><FaLinkedin /></a>
                <a href="#" className="text-dark"><FaGithub /></a>
              </div>
            </div>
          </div>

          {/* Member 3 */}
          <div className="col-md-6 col-lg-4">
            <div className="card border-0 shadow h-100 p-4">
              <img
                src="https://i.ibb.co/zTYJ6BJW/person3.png"
                alt="David Kim"
                className="rounded-circle mx-auto mb-3"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
              <h5 className="fw-bold mb-1">David Kim</h5>
              <p className="text-primary mb-2">VP of Operations</p>
              <p className="text-muted mb-3">
                Logistics expert with 10+ years at FedEx and UPS. Knows the ins and outs of shipping operations and helps our customers optimize their fulfillment.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <a href="#" className="text-dark"><FaLinkedin /></a>
                <a href="#" className="text-dark"><FaTwitter /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* METRICS SECTION */}
<div className="py-5 bg-white text-center">
  <div className="container">
    {/* Heading */}
    <h2 className="fw-bold mb-2">Trusted by Industry Leaders</h2>
    <p className="text-muted mb-4 fs-5">
      Join thousands of successful sellers who trust LogiFlow
    </p>

    {/* Counters */}
    <div className="row justify-content-center text-primary fw-bold fs-2 mb-4">
      <div className="col-6 col-md-3 mb-4">
        <CountUp end={1000} duration={2} />+
        <p className="text-muted fs-6 fw-normal">Active Sellers</p>
      </div>
      <div className="col-6 col-md-3 mb-4">
        <CountUp end={50000} duration={2} />+
        <p className="text-muted fs-6 fw-normal">Orders Processed</p>
      </div>
      <div className="col-6 col-md-3 mb-4">
        <CountUp end={99.9} decimals={1} duration={2} />
        <p className="text-muted fs-6 fw-normal">Uptime %</p>
      </div>
      <div className="col-6 col-md-3 mb-4">
        <CountUp end={24} duration={2} />
        <p className="text-muted fs-6 fw-normal">Countries Served</p>
      </div>
    </div>

    {/* Logos row */}
    <div className="d-flex flex-wrap justify-content-center gap-4 mt-4">
      <div className="d-flex flex-column align-items-center">
        <div className="bg-primary text-white p-3 rounded"><FaStore size={20} /></div>
        <small className="text-muted mt-2">ShopMaster</small>
      </div>
      <div className="d-flex flex-column align-items-center">
        <div className="bg-success text-white p-3 rounded"><FaStore size={20} /></div>
        <small className="text-muted mt-2">RetailPro</small>
      </div>
      <div className="d-flex flex-column align-items-center">
        <div className="bg-purple text-white p-3 rounded" style={{ backgroundColor: '#9b5de5' }}><FaGift size={20} /></div>
        <small className="text-muted mt-2">GiftHub</small>
      </div>
      <div className="d-flex flex-column align-items-center">
        <div className="bg-warning text-white p-3 rounded"><FaTshirt size={20} /></div>
        <small className="text-muted mt-2">FashionForward</small>
      </div>
      <div className="d-flex flex-column align-items-center">
        <div className="bg-danger text-white p-3 rounded"><FaHome size={20} /></div>
        <small className="text-muted mt-2">HomeGoods</small>
      </div>
      <div className="d-flex flex-column align-items-center">
        <div className="bg-primary text-white p-3 rounded"><FaDesktop size={20} /></div>
        <small className="text-muted mt-2">TechStore</small>
      </div>
      <div className="d-flex flex-column align-items-center">
        <div className="bg-primary text-white p-3 rounded"><FaStore size={20} /></div>
        <small className="text-muted mt-2">ShopMaster</small>
      </div>
    </div>
  </div>
</div>

    </div>
    <Footer/>
  </div>
  )
}

export default About
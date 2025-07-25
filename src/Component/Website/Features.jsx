const Features = () => {
  return (
    <section id="features" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="text-dark fs-1 fw-bold mb-3">Powerful Features</h2>
          <p className="text-muted fs-5 mx-auto" style={{ maxWidth: "36rem" }}>
            Everything you need to manage your e-commerce operations
            efficiently and scale your business
          </p>
        </div>
        
        <div className="row g-4">
          {/* Feature cards would go here */}
        </div>
      </div>
    </section>
  );
};

export default Features;
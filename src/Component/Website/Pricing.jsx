const Pricing = () => {
  return (
    <section 
      id="pricing" 
      className="py-5 position-relative overflow-hidden"
      style={{ background: "linear-gradient(to bottom, white, rgba(239, 246, 255, 0.5), white)" }}
    >
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <div 
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ 
            background: "radial-gradient(circle at top right, rgba(59, 130, 246, 0.1), transparent 50%)"
          }}
        ></div>
        <div 
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ 
            background: "radial-gradient(circle at bottom left, rgba(59, 130, 246, 0.1), transparent 50%)"
          }}
        ></div>
      </div>
      
      <div className="container position-relative">
        <div className="text-center mb-5">
          <span 
            className="text-primary px-4 py-1 rounded-button small fw-semibold mb-3 d-inline-block shadow-sm"
            style={{ 
              background: "linear-gradient(to right, #bfdbfe, #bfdbfe)",
              color: "#2563eb"
            }}
          >
            Pricing Plans
          </span>
          <h2 
            className="fw-bold mb-4"
            style={{
              fontSize: "2.75rem",
              background: "linear-gradient(to right, #2563eb, #3b82f6, #2563eb)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted fs-5 mx-auto" style={{ maxWidth: "36rem" }}>
            Choose the perfect plan for your business needs with no hidden
            fees. Start growing with CentralLogix today!
          </p>
        </div>
        
        <div className="row g-4">
          {/* Pricing cards would go here */}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
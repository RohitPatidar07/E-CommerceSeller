const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
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
              {/* Form fields would go here */}
            </form>
          </div>
          
          <div className="col-12 col-lg-6">
            {/* Contact info would go here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
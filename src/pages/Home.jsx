function Home() {
  return (
    <>
      <section className="hero">
        <h1>Welcome to ShopSphere</h1>

        <p>
          Build a complete React Product Review Application from scratch.
        </p>

        <button>Browse Products</button>
      </section>

      <section>

        <h2 className="section-title">
          Featured Products
        </h2>

        <div className="card-container">

          <div className="card">
            <h3>💻 Laptop</h3>
            <p>High Performance</p>
          </div>

          <div className="card">
            <h3>📱 Mobile</h3>
            <p>Latest Smartphones</p>
          </div>

          <div className="card">
            <h3>🎧 Headphones</h3>
            <p>Crystal Clear Sound</p>
          </div>

          <div className="card">
            <h3>⌚ Smart Watch</h3>
            <p>Fitness Tracking</p>
          </div>

        </div>

      </section>

      <section>

        <h2 className="section-title">
          Why ShopSphere?
        </h2>

        <div className="card-container">

          <div className="card">
            ⭐ Trusted Reviews
          </div>

          <div className="card">
            🚚 Fast Delivery
          </div>

          <div className="card">
            🔒 Secure Shopping
          </div>

        </div>

      </section>

      <section className="cta">

        <h2>
          Start Learning React with Real Projects
        </h2>

        <button>Get Started</button>

      </section>

    </>
  );
}

export default Home;
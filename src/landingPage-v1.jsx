import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./LandingPage.module.css";

function LandingPage() {
  const [products, setProducts] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [card, setcard] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    }

    fetchProducts();
  }, []);

  function handleSubmit(id) {
    const por = products.find((item) => item.id === id);
    if (!por) return;
    setcard((car) => [...car, por]);
  }

  return (
    <div>
      <section className={styles.Landing}>
        <ul className={styles.list}>
          <li className={styles.listitem}>
            <NavLink to="/product" className={styles.link}>
              Go to Product
            </NavLink>
          </li>
        </ul>
      </section>

      <section className={styles.productsSection}>
        {products.length === 0 ? (
          <p>Loading Products</p>
        ) : (
          <div className={styles.productsGrid}>
            {products.map((item) => (
              <div key={item.id} className={styles.productCard}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className={styles.productImage}
                />
                <button
                  className={styles.productButton}
                  onClick={() => handleSubmit(item.id)}
                >
                  Add to product
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default LandingPage;

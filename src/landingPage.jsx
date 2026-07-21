import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./LandingPage.module.css";
import { useDispatch } from "react-redux";
import { addQtv, delCard, subQty, toCard } from "./AddCart";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function LandingPage() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);

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
    dispatch(toCard(por));
    navigate("/product");
  }

  function isAdded(id) {
    return cart.some((item) => item.id === id);
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
          <p>Loading Products...</p>
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
                  className={styles.btn}
                  onClick={() => dispatch(subQty(item.id))}
                >
                  -
                </button>

                <button
                  className={`${styles.productButton} ${isAdded(item.id) ? styles.deleteButton : ""}`}
                  onClick={() =>
                    isAdded(item.id)
                      ? dispatch(delCard(item.id))
                      : handleSubmit(item.id)
                  }
                >
                  {isAdded(item.id) ? "Delete" : "Add to Product"}
                </button>

                <button
                  className={styles.btn}
                  onClick={() => dispatch(addQtv(item.id))}
                >
                  +
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

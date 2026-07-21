import { useDispatch, useSelector } from "react-redux";
import { addQtv, delCard, subQty } from "./AddCart";
import styles from "./Product.module.css";

function Product() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  function handleDel(id) {
    dispatch(delCard(id));
  }

  const totalItems = cart.reduce((acc, cur) => acc + cur.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0,
  );
  const shiping = cart.reduce((acc, cur) => acc + cur.quantity * 2.2, 0);

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.cartTitle}>Your Cart</h2>
      {cart.length === 0 ? (
        <p className={styles.emptyMessage}>Cart is empty</p>
      ) : (
        <div className={styles.cartWrapper}>
          <div className={styles.cartGrid}>
            {cart.map((cty) => (
              <div key={cty.id} className={styles.cartCard}>
                <img
                  src={cty.thumbnail}
                  alt={cty.title}
                  className={styles.cartImage}
                />
                <div className={styles.qtyBox}>
                  <button
                    className={styles.btn}
                    onClick={() => dispatch(subQty(cty.id))}
                  >
                    -
                  </button>
                  <span className={styles.quantity}>
                    Quantity: {cty.quantity}
                  </span>
                  <button
                    className={styles.btn}
                    onClick={() => dispatch(addQtv(cty.id))}
                  >
                    +
                  </button>
                </div>
                <h3 className={styles.head}>{cty.price}$</h3>
                <button
                  className={styles.deleteButton}
                  onClick={() => handleDel(cty.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          <div className={styles.cartSummary}>
            <h3>Summary</h3>
            <p>Total Items: {totalItems}</p>
            <p>All Expence: ${totalPrice.toFixed(2)}</p>
            <p>Shipping Expence: ${shiping.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;

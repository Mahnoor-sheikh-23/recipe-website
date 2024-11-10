import React from 'react';
import styles from '../styles/shop.module.css';

const Shop: React.FC = () => {
  return (
    <section className={styles.shop}>
      <div className={styles.product}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBwQIS88mQLgI1PrRVBgZ41WTgNbdP4LN0QQ&s" alt="Knife Set" />
        <h3>Knife Set</h3>
        <p>A versatile knife set for all kitchen needs.</p>
        <p className={styles.price}>$39.99</p>
        <button className={styles.btn}>Add to Cart</button>
      </div>
      <div className={styles.product}>
        <img src="https://www.thespruceeats.com/thmb/MMMF_c3mDdjurY9XUhJiex866QE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ses-primary-stainless-cookware-sets-rkilgore-01-54cc53feba5748cdab8db4719de942ae.jpg" alt="Stainless Cookware" />
        <h3>Stainless Steel Cookware</h3>
        <p>Durable cookware set for healthy cooking.</p>
        <p className={styles.price}>$59.99</p>
        <button className={styles.btn}>Add to Cart</button>
      </div>
      <div className={styles.product}>
        <img src="https://img.drz.lazcdn.com/static/pk/p/aeeef8dea5244370b0471b3c89f941cc.jpg_720x720q80.jpg" alt="Ceramic Pots" />
        <h3>Ceramic Pots</h3>
        <p>Elegant pots that retain flavor and nutrients.</p>
        <p className={styles.price}>$44.99</p>
        <button className={styles.btn}>Add to Cart</button>
      </div>
      <div className={styles.product}>
        <img src="https://m.media-amazon.com/images/I/81KDQ3DForL._AC_UF350,350_QL80_.jpg" alt="Kitchen Blender" />
        <h3>Kitchen Blender</h3>
        <p>Powerful blender for smoothies and soups.</p>
        <p className={styles.price}>$34.99</p>
        <button className={styles.btn}>Add to Cart</button>
      </div>
      <div className={styles.product}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK3YB5v64-rzrfneViihFhB3sDgfksBZc51A&s" alt="Non-Stick Pan" />
        <h3>Non-Stick Pan</h3>
        <p>Perfect for low-oil cooking with easy cleanup.</p>
        <p className={styles.price}>$24.99</p>
        <button className={styles.btn}>Add to Cart</button>
      </div>
      <div className={styles.product}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF30oCwLptcodEd86majsA3GKhdT-IsTKlVw&s" alt="Storage Containers" />
        <h3>Food Storage Containers</h3>
        <p>Keep your ingredients fresh and organized.</p>
        <p className={styles.price}>$19.99</p>
        <button className={styles.btn}>Add to Cart</button>
      </div>
      <div className={styles.product}>
        <img src="https://www.limon.com.pk/images/product_gallery/1693056280_1U9A6784.jpg" alt="Cutting Board Set" />
        <h3>Cutting Board Set</h3>
        <p>Sturdy boards for meat, veggies, and more.</p>
        <p className={styles.price}>$29.99</p>
        <button className={styles.btn}>Add to Cart</button>
      </div>
      <div className={styles.product}>
        <img src="https://static-01.daraz.pk/p/e7497ec9c08d900be412e24bc9a6ab0e.jpg" alt="Utensils Set" />
        <h3>Kitchen Utensils Set</h3>
        <p>Essential utensils for any cooking style.</p>
        <p className={styles.price}>$21.99</p>
        <button className={styles.btn}>Add to Cart</button>
      </div>
      {/* Add more product sections if needed */}
    </section>
  );
};

export default Shop;

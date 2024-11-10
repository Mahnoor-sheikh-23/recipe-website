import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css'; // You can create a CSS module for styling

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/" className={styles.navLink}>Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about" className={styles.navLink}>About</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/shop" className={styles.navLink}>Shop</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/recipe" className={styles.navLink}>Recipe</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

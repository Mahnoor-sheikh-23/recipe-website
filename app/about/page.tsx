import React from 'react';
import styles from '../styles/about.module.css';

const About: React.FC = () => {
  return (
    <section className={styles.about}>
      <h2>About Us</h2>
      <p>We bring people closer through the art of cooking with simple, delicious recipes.</p>
      
      <div className={styles.team}>
        <div className={styles.teamMember}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKXKWPaircbvrkg2toUrAvm0LQ2pc7JVZQ3g&s" alt="John Doe" />
          <h3>John Doe</h3>
          <p>Head Chef</p>
        </div>
        <div className={styles.teamMember}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy4g0_tWtv_0Gz2XQlA-U-Dke0lmr_GrvfsA&s" alt="Jane Smith" />
          <h3>Sara Smith</h3>
          <p>Recipe Developer</p>
        </div>
      </div>
    </section>
  );
};

export default About;

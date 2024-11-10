import React from 'react';
import styles from '../styles/recipe.module.css';

const Recipe: React.FC = () => {
    return (
        <section className={styles.recipe}>
            <h2>Recipe of the Day</h2>
            <div className={styles.recipeDetails}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMJYZb0Y3eH6KMbV77kkro8VkBtrR-LkQrKw&s" alt="Miso Soup" />
                <div className={styles.details}>
                    <h3>Miso Soup</h3>
                    <p>A comforting Japanese soup with miso, tofu, and seaweed.</p>
                    <button className={styles.btn}>Get Recipe</button>
                </div>
            </div>
            <div className={styles.recipeDetails}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2cQ_ahARkwTRJbCsuahZejqBz8qQwcqY8ug&s" alt="Chicken Parmesan" />
                <div className={styles.details}>
                    <h3>Chicken Parmesan</h3>
                    <p>Crispy chicken cutlets topped with marinara and melted cheese.</p>
                    <button className={styles.btn}>Get Recipe</button>
                </div>
            </div>
            <div className={styles.recipeDetails}>
                <img src="https://www.culinaryhill.com/wp-content/uploads/2022/12/Tacos-al-Pastor-Culinary-Hill-1200x800-1.jpg" alt="Tacos Al Pastor" />
                <div className={styles.details}>
                    <h3>Tacos Al Pastor</h3>
                    <p>Mexican-style tacos with marinated pork and pineapple.</p>
                    <button className={styles.btn}>Get Recipe</button>
                </div>
            </div>
            <div className={styles.recipeDetails}>
                <img src="https://www.modernfarmhouseeats.com/wp-content/uploads/2021/03/chili-lime-shrimp-ramen-2-500x500.jpg" alt="Ramen" />
                <div className={styles.details}>
                    <h3>Ramen</h3>
                    <p>A Japanese noodle soup with a rich, savory broth.</p>
                    <button className={styles.btn}>Get Recipe</button>
                </div>
            </div>
            <div className={styles.recipeDetails}>
                <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/puttanesca-cfb4e42.jpg" alt="Pasta Puttanesca" />
                <div className={styles.details}>
                    <h3>Pasta Puttanesca</h3>
                    <p>An Italian pasta with tomatoes, olives, and capers.</p>
                    <button className={styles.btn}>Get Recipe</button>
                </div>
            </div>
            <div className={styles.recipeDetails}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxrU2j7qTVYx4HNFMdG1DFUYSsaHn7CUtdkQ&s" alt="Grilled Steak" />
                <div className={styles.details}>
                    <h3>Grilled Steak</h3>
                    <p>Juicy steak grilled to perfection with a garlic herb butter.</p>
                    <button className={styles.btn}>Get Recipe</button>
                </div>
            </div>
        </section>
    );
};

export default Recipe;

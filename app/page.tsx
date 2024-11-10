"use client";
import styles from './styles/home.module.css';
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter()
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault()
    router.push("/recipe")
  }
  return (
    <div>
    {/* Hero Section */}
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        
        <h1>Welcome to the Recipe Hub</h1>
        <p>Discover, cook, and enjoy delicious recipes from around the world!</p>
        <button className={styles.btn} onClick={handleClick}>Explore Recipes</button>
      </div>
    </section>

    {/* Recipe Cards */}
    <section className={styles.recipeCards}>
      <div className={styles.card}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_e01dZKD7v6bX6yICzi-rqjGsebFxgMyD5Q&s" alt="Recipe 1" className={styles.cardImg} />
        <h3>Chicken Biryani</h3>
        <p>Biryani is a flavorful South Asian rice dish made with fragrant basmati rice, tender meat (such as chicken, lamb, or beef), and a blend of aromatic spices. </p>
        <button className={styles.btn}>View Recipe</button>
      </div>
      <div className={styles.card}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2gkHyxiyMRoTO75V5IMKUxJukHXg5RYgd2Q&s" alt="Recipe 1" className={styles.cardImg} />
        <h3>Kabab</h3>
        <p>
        The Kaaba is a sacred cuboid structure in Islam, located in Mecca, Saudi Arabia, serving as the focal point for Muslim prayers worldwide.</p>
        <button className={styles.btn}>View Recipe</button>
      </div>
      <div className={styles.card}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjHDp6F68GbTyFtCQlASsvymW8OUV5v_eFjA&s" alt="Recipe 1" className={styles.cardImg} />
        <h3>Spaghetti Carbonara</h3>
        <p>A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.</p>
        <button className={styles.btn}>View Recipe</button>
      </div>
      {/* Add more cards here */}
    </section>
  </div>  
  );
}

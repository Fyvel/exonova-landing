import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.hero}>
      <div className={`${styles.container} ${styles.heroContent}`}>
        <div className={`${styles.heroText} ${styles.spacing}`}>
          <h1 className={styles["primary-title"]}>
            Revolutionising Endometriosis Diagnosis
          </h1>
          <p>Empowering women and healthcare professionals with fast, non-invasive, and insightful solutions.</p>
					<p>Because women have waited long enough for better answers.</p>
					<button>Call To Action</button>
        </div>
				<div className={styles.heroImage}>
					<img src="https://images.unsplash.com/photo-1740205732463-8daff9ff0e57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8MTc1NTI5MTY5OXww&ixlib=rb-4.1.0&q=80&w=1080" alt="Hero Image" />
					</div>
      </div>
    </header>
  );
}

import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.hero} id="hero">
      <div className={`container ${styles.heroContent}`}>
        <div className={`spacing`}>
          <h1 className={styles.heroTitle}>
            Revolutionising Endometriosis Diagnosis
          </h1>
          <p className={styles.heroSubTitle}>
            <mark>Empowering women and healthcare professionals with fast, non-invasive, and insightful solutions</mark>.
          </p>
          <p className={styles.heroQuote}><i>Because women have waited long enough for better answers.</i></p>
        </div>
        <button className={`btn ${styles.ctaButton}`}>Call To Action</button>
      </div>
    </header >
  );
}

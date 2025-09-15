import styles from "./header.module.css"

export default function Header() {
  return (
    <>
      <div className={"parallax-image parallax-image-hero parallax-sticky"} />
      <header className={`parallax-section ${styles.hero}`} id="hero">
        <div className={`container ${styles["hero-content"]}`}>
          <div className={"spacing"}>
            <h1 className={styles["hero-title"]}>
              Revolutionising Endometriosis Diagnosis
            </h1>
            <p className={styles["hero-sub-title"]}>
              <mark>Empowering women and healthcare professionals with fast, non-invasive, and insightful solutions</mark>.
            </p>
            <p className={styles["hero-quote"]}><i>Because women have waited long enough for better answers.</i></p>
          </div>
          <br />
          <a href="mailto:fanny.blaudez@exonova.com.au" className={`btn ${styles.cta}`}>
            Contact us
          </a>
        </div>
      </header >
    </>
  )
}

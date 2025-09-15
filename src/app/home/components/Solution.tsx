import styles from "./solution.module.css"
import Image from "next/image"

export default function Solution() {
  return (
    <>
      <section className={`parallax-section ${styles.solution}`} id="solution">
        <div className={"container spacing"}>
          <div className={"spacing"}>
            <h2>A New Era in Endometriosis Diagnosis</h2>
            <p>
              EXONOVA Biotech is developing a non-invasive blood-based test powered by advanced biomarkers.
            </p>
            <p>
              Our technology provides nuanced results, helping clinicians make better treatment decisions.
            </p>
            <p>
              Our approach aims to reduce unnecessary surgeries, speed up diagnosis, and give women more control over their care.
            </p>
          </div>

          <br />

          <h3><mark>Enhanced Patient Journey</mark></h3>
          <ol className={styles.journey}>
            <li>
              <Image src="/trigger.svg" alt="Icon Symptoms" width={96} height={96} />
              Symptoms
            </li>
            <Arrow />
            <li>
              <Image src="/doctor.svg" alt="Icon GP Visit" width={96} height={96} />
              GP Visit
            </li>
            <Arrow />
            <li>
              <Image src="/drop.svg" alt="Icon Sample" width={96} height={96} />
              Sample Collection
            </li>
            <Arrow />
            <li>
              <Image src="/bolt.svg" alt="Icon Exonova Test" width={96} height={96} />
              Exonova Test
            </li>
            <Arrow />
            <li>
              <Image src="/decision.svg" alt="Icon Informed Decision" width={96} height={96} />
              Informed Decision
            </li>
          </ol>
        </div>
      </section>
    </>
  )
}

function Arrow() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      <div className={`${styles["arrow-sliding"]}`}>
        <div className={`${styles.arrow}`}></div>
      </div>
      <div className={`${styles["arrow-sliding"]} ${styles.delay1}`}>
        <div className={`${styles.arrow}`}></div>
      </div>
    </div>
  )
}

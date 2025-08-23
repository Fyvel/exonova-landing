import styles from './solution.module.css';

export default function Solution() {
  return (
    <section className={`section ${styles.solution}`}>
      <div className={`container spacing`}>
        <div className={`spacing`}>
          <h2>A New Era in Endometriosis Diagnosis</h2>
          <p>
            Exonova is developing a non-invasive blood-based test powered by advanced biomarkers.
          </p>
          <p>
            Our technology provides nuanced results, helping clinicians make better treatment decisions.
          </p>
          <p>
            Our approach aims to reduce unnecessary surgeries, speed up diagnosis, and give women more control over their care.
          </p>
        </div>
        <ul className={styles.list}>
          <Card
            title="Non-invasive and affordable"
            description="Simple blood sample collection"
            src="/shield.svg"
          />
          <Card
            title="Fast & Reliable"
            description="Actionable results for clinicians"
            src="/bolt.svg"
          />
          <Card
            title="Empowers Decision-Making"
            description="Enables more personalised care plans"
            src="/decision.svg"
          />
        </ul>
        <h3><mark>Enhanced Patient Journey</mark></h3>
        <ol className={styles.journey}>
          <li>
            <img src="/trigger.svg" alt="Symptoms" />
            Symptoms
          </li>
          <Arrow />
          <li>
            <img src="/doctor.svg" alt="GP Visit" />
            GP Visit
          </li>
          <Arrow />
          <li>
            <img src="/drop.svg" alt="Sample" />
            Sample
          </li>
          <Arrow />
          <li>
            <img src="/bolt.svg" alt="Exonova Test" />
            Exonova Test
          </li>
          <Arrow />
          <li>
            <img src="/decision.svg" alt="Informed Decision" />
            Informed Decision
          </li>
        </ol>
      </div>
    </section>
  );
}

type CardProps = {
  title: string;
  description: string;
  src: string;
}
const Card = ({ title, description, src }: CardProps) => (
  <div className={styles.card}>
    <img className={styles.image} src={src} alt={title} />
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.description}>{description}</p>
  </div>
)

function Arrow() {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.arrowSliding}`}>
        <div className={`${styles.arrow}`}></div>
      </div>
      <div className={`${styles.arrowSliding} ${styles.delay1}`}>
        <div className={`${styles.arrow}`}></div>
      </div>
    </div>
  )
}
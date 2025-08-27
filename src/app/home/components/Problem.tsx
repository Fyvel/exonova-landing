import styles from './problem.module.css';

export default function Problem() {
  return (
    <section className={`section`} id="problem">
      <div className={`container spacing`}>
        <div className={`spacing`}>
          <h2>Endometriosis Diagnosis is Broken</h2>
          <p>
            Current methods are invasive, costly, and unreliable.<br />
            Millions suffer in silence due to outdated diagnostic approaches.
          </p>
        </div>
        <ul className={styles.list}>
          <Card
            title="6 to 12 years"
            description="Average wait for diagnosis"
            src="/time.svg"
          />
          <Card
            title="1 in 10"
            description="Women have endometriosis"
            src="/1-in-10.svg"
          />
          <Card
            title="1 in 3"
            description="Women experience severe pelvic pain"
            src="/1-in-3.svg"
          />
          <Card
            title="8.9B AUD"
            description="Australian economic burden"
            src="/money.svg"
          />
        </ul>
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
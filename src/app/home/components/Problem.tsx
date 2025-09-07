import Image from 'next/image';
import styles from './problem.module.css';

export default function Problem() {
  return (
    <section className={`parallax-section ${styles.problem}`} id="problem">
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
            title="6 - 12 years"
            description="Average wait before an endometriosis diagnosis"
            src="/time.svg"
          />

          <Card
            title="1 in 10 women"
            description="Suffer from endometriosis"
            src="/1-in-10.svg"
          />

          <Card
            title="30% of women"
            description="Are likely to experience severe pelvic pain"
            src="/1-in-3.svg"
          />

          <Card
            title="AUD 8.9 billion"
            description="Annual economic burden in Australia"
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
  <li className={styles.card}>
    <Image className={styles.image} src={src} alt={title} width={100} height={100} />
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.description}>{description}</p>
  </li>
)
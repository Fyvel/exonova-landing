import Image from 'next/image';
import styles from './impact.module.css';

export default function Impact() {
  return (
    <>
      <div className={`parallax-image parallax-image-impact parallax-sticky`} />
      <section className={`parallax-section ${styles.impact}`} id={"impact"}>
        <div className={`container spacing`}>
          <h2 className={"outline-text"}>
            Better for Women,<br />
            Smarter for Clinicians &<br />
            Cheaper for Everyone.
          </h2>

          <div className={styles.cards}>
            <Card
              src="/heart.svg"
              title="Women"
              items={[
                "Shorter diagnostic time",
                "Fewer unnecessary surgeries",
                "More informed choices",
                "Reduced suffering"
              ]}
            />
            <Card
              src="/medical.svg"
              title="Clinicians"
              items={[
                "Clearer patient triage",
                "Objective results",
                "Enhanced decision-making",
                "Improved patient outcomes"
              ]}
            />
            <Card
              src="/healthcare.svg"
              title="Healthcare Systems"
              items={[
                "Reduced surgical load",
                "Optimised resources",
                "Lower costs",
                "Patient prioritisation"
              ]}
            />
          </div>

          <h3 className={"outline-text"}><mark>Current vs. Enhanced Pathway</mark></h3>
          <Table
            columns={["Current pathway", "Exonova-enhanced"]}
            rows={[
              {
                header: "Diagnosis Time",
                cells: ["6 to 12 years", "Weeks"]
              },
              {
                header: "Surgery Rate",
                cells: ["High", "Reduced"]
              },
              {
                header: "Patient Satisfaction",
                cells: ["Low", "High"]
              },
              {
                header: "Healthcare Costs",
                cells: ["$$$", "$"]
              },
            ]}
          />
        </div>
      </section>
    </>
  )
}


type CardProps = {
  src: string;
  title: string;
  items: string[];
}
const Card = ({ src, title, items }: CardProps) => (
  <div className={styles.card}>
    <h3 className={styles.title}>{title}</h3>
    <Image src={src} alt={title} width={100} height={100} className={styles.image} />
    <ul className={styles.items}>
      {items.map((item, index) => (
        <li key={index} className={styles.item}>{item}</li>
      ))}
    </ul>
  </div>
)

type TableProps = {
  columns: string[];
  rows: {
    header: string;
    cells: string[];
  }[];
}
const Table = ({ columns, rows }: TableProps) => (
  <div className={styles.table}>
    <div className={styles["table-row"]}>
      <h4 className={styles["table-head"]} aria-hidden="true" />
      {columns.map((column, index) => (
        <h4 key={index} className={styles["table-cell"]}>
          {index % 2 ? <span className={styles.highlight}>{column}</span> : column}
        </h4>
      ))}
    </div>
    {rows.map((row, index) => (
      <div key={index} className={styles["table-row"]}>
        <h4 className={styles["table-head"]}>{row.header}</h4>
        {row.cells.map((cell, cellIndex) => (
          <div key={cellIndex} className={styles["table-cell"]}>
            {cellIndex % 2 ? <span className={styles.highlight}>{cell}</span> : cell}
          </div>
        ))}
      </div>
    ))}
  </div>
)

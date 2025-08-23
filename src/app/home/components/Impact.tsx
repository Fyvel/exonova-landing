import styles from './impact.module.css';

export default function Impact() {
  return (
    <section className={`section`}>
      <div className={`container spacing`}>
        <h2>
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
              "Better allocation"
            ]}
          />
        </div>

        <h3><mark>Current vs. Enhanced Pathway</mark></h3>
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
    </section >
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
    <img className={styles.image} src={src} alt={title} />
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
    <div className={styles.tableRow}>
      <h4 className={styles.tableHead} aria-hidden="true" />
      {columns.map((column, index) => (
        <h4 key={index} className={styles.tableCell}>
          {index % 2 ? <mark>{column}</mark> : column}
        </h4>
      ))}
    </div>
    {rows.map((row, index) => (
      <div key={index} className={styles.tableRow}>
        <h4 className={styles.tableHead}>{row.header}</h4>
        {row.cells.map((cell, cellIndex) => (
          <div key={cellIndex} className={styles.tableCell}>
            {cellIndex % 2 ? <mark>{cell}</mark> : cell}
          </div>
        ))}
      </div>
    ))}
  </div>
)

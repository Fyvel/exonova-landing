import styles from './roadmap.module.css';

export default function Roadmap() {
  return (
    <section className={`section ${styles.roadmap}`} id="roadmap">
      <div className={`container spacing`}>
        <h2>Our Vision</h2>
        <div className={styles.timeline}>
          <div className={styles.event}>
            <div className={styles.marker}>
              <img className={styles.icon} src="/phase-1.svg" />
              <h4 className={styles.label}><mark>Diagnosis</mark></h4>
            </div>
            <div className={styles.body}>
              <p className={styles.content}>
                Highly accurate & rapid diagnosis to empower doctors in helping these women
              </p>
            </div>
          </div>

          <div className={styles.event}>
            <div className={styles.marker}>
              <img className={styles.icon} src="/phase-2.svg" />
              <h4 className={styles.label}><mark>Research & Development</mark></h4>
            </div>
            <div className={styles.body}>
              <p className={styles.content}>
                Focused on innovative solutions and clinical trials
              </p>
            </div>
          </div>

          <div className={styles.event}>
            <div className={styles.marker}>
              <img className={styles.icon} src="/phase-3.svg" />
              <h4 className={styles.label}><mark>Personalised Treatment</mark></h4>
            </div>
            <div className={styles.body}>
              <p className={styles.content}>
                Tailored therapies based on individual patient profiles
              </p>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

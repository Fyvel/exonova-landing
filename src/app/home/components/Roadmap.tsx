import styles from './roadmap.module.css';
import Image from 'next/image';

const events = [
  {
    phase: 1,
    title: "Diagnosis",
    description: "Deliver highly accurate and rapid results to empower doctors in providing better care for women",
    icon: "/phase-1.svg"
  },
  {
    phase: 2,
    title: "Research & Development",
    description: "Advance the understanding of endometriosis to unlock new diagnostic and treatment opportunities",
    icon: "/phase-2.svg"
  },
  {
    phase: 3,
    title: "Personalised Treatment",
    description: "Develop tailored therapies based on individual patient profiles",
    icon: "/phase-3.svg"
  }
]

export default function Roadmap() {
  return (
    <section className={`parallax-section ${styles.roadmap}`} id="roadmap">
      <div className={`container spacing`}>
        <h2>Our Vision</h2>
        <div className={styles.timeline}>
          {events.map(event => (
            <div className={styles.event} key={event.phase}>
              <div className={styles.marker}>
                <Image className={styles.icon} src={event.icon} width={40} height={40} alt={event.title} />
                <h3 className={styles.label}><mark>{event.title}</mark></h3>
              </div>
              <div className={styles.body}>
                <p className={styles.content}>
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  )
}

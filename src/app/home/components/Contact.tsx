import styles from "./contact.module.css"

export default function Contact() {
  return (
    <>
      <div className={`parallax-image parallax-image-contact parallax-sticky`} />
      <section className={`parallax-section ${styles.contact}`} id="contact">
        <div className={`container spacing`}>
          <h2>Get in touch</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque leo nec libero tincidunt, a tincidunt libero tincidunt.
          </p>
          <a href="mailto:contact@exonova.com" className={`btn ${styles.cta}`}>
            Get in touch
          </a>
        </div>
      </section>
    </>
  )
}

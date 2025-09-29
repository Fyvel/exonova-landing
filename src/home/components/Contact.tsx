import styles from "./contact.module.css"

export default function Contact() {
  return (
    <>
      <div className={"parallax-image parallax-image-contact parallax-sticky"} />
      <section className={`parallax-section ${styles.contact}`} id="contact">
        <div className={"container spacing"}>
          <h2>Get in touch</h2>
          <p>
            Whether you are a clinician or a partner eager to collaborate, we will be happy to hear from you.
          </p>
          <a href="mailto:fanny.blaudez@exonova.com.au" className={`btn ${styles.cta}`}>
            Email us
          </a>
        </div>
      </section>
    </>
  )
}

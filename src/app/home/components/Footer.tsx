import styles from "./footer.module.css"

const anchors = [
  { href: `#problem`, label: "Problem" },
  { href: `#solution`, label: "Solution" },
  { href: `#impact`, label: "Impact" },
  { href: `#roadmap`, label: "Roadmap" },
  { href: `#faq`, label: "FAQ" },
  { href: `#contact`, label: "Contact" },
];

export default function Footer() {
  return (
    <footer>
      <div className={`container spacing ${styles.footer}`}>
        <div className={styles.wrapper}>
          <div className={styles.branding}>

            <a href="#" className={styles.logoLink}>
              <img src="/logo.svg" alt="Exonova Logo" className={styles.logo} />
              EXONOVA Biotech
            </a>
          </div>

          <div className={styles.anchors}>
            <h4>Quick Links</h4>
            {anchors.map((anchor) => (
              <a key={anchor.label} href={anchor.href} className={styles.anchor}>
                {anchor.label}
              </a>
            ))}
          </div>

          <div className={styles.socials}>
            <h4>Reach Out</h4>
            <a href="https://www.linkedin.com/company/exonova-biotech/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:contact@exonova.com`}>
              Email
            </a>
          </div>

          <div className={styles.legal}>
            <h4>Legal</h4>
            <a href="" target="_blank" rel="noopener noreferrer">
              Terms and Conditions
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      <p className={styles.copyright}>© 2025 EXONOVA Biotech. All rights reserved.</p>
    </footer>
  );
}

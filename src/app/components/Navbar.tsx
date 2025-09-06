import Image from "next/image";
import styles from './navbar.module.css'

const anchors = [
	{ href: `#`, label: "Home" },
	{ href: `#problem`, label: "Current Problem" },
	{ href: `#solution`, label: "Our Solution" },
	{ href: `#impact`, label: "Impact" },
	{ href: `#roadmap`, label: "Our vision" },
	// { href: `#faq`, label: "Frequently asked questions" },
	{ href: `#contact`, label: "Contact Us" },
];

export default function Navbar() {
	return (
		<nav className={`${styles.navbar}`} role="navigation">
			<div className={`${styles["navbar-bg"]}`} />

			<a className={`container ${styles.brand}`} href="#">
				<Image src="/logo.svg" alt="Exonova Logo" width={80} height={80} className={styles.logo} />
				<h1 className={`${styles.title}`}>EXONOVA Biotech</h1>
			</a>

			<div className={`${styles["menu-toggle"]}`}>
				<input type="checkbox" id="menuCheckbox" className={styles["menu-checkbox"]} />

				<div className={styles.hamburger}>
					<span></span>
					<span></span>
					<span></span>
				</div>

				<label htmlFor="menuCheckbox" className={styles.overlay} />

				<ul className={`${styles.menu}`}>
					{anchors.map(({ href, label }) => (
						<li key={label}>
							<a href={href}>{label}</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	)
}
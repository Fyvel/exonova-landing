import styles from './faq.module.css';

const faqs = [
	{
		key: 1,
		question: "What is Exonova?",
		answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	},
	{
		key: 2,
		question: "How does Exonova work?",
		answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	},
	{
		key: 3,
		question: "Who can benefit from Exonova?",
		answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	},
	{
		key: 4,
		question: "How can I get involved with Exonova?",
		answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	},
]

export default function FrequentlyAskedQuestions() {
	return (
		<section className={`section ${styles.faq}`}>
			<div className={`container spacing`}>
				<h2>Frequently Asked Questions</h2>
				<dl className={`spacing ${styles.accordion}`}>
					{faqs.map((faq) => (
						<div key={faq.key} className={styles.tab}>
							<input type="checkbox" id={`faq-${faq.key}`} name={`faq-${faq.key}`} />
							<label htmlFor={`faq-${faq.key}`} className={styles.label}>
								<dt><mark>{faq.question}</mark></dt>
							</label>
							<dd className={styles.answer}>{faq.answer}</dd>
						</div>
					))}
				</dl>
			</div>
		</section>
	)
}
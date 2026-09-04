import type { ReactNode } from 'react';

import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

export default function Home(): ReactNode {
  return (
    <Layout
      title="IITM DS OPEN NOTES"
      description="Open source study notes for the IIT Madras BS Data Science and Applications programme, structured and maintained as a documentation site."
    >
      <main className={styles.page}>

        <section className={styles.hero}>
          <div className={styles.heroContent}>

            <Heading as="h1" className={styles.heroTitle}>
              <span className={styles.heroLabel}>IITM</span>
              <span>BS DATA SCIENCE AND APPLICATIONS</span>
              <span>OPEN NOTES</span>
            </Heading>

            <p className={styles.heroSubtitle}>
              Open source study notes for the IIT Madras BS Data Science and
              Applications programme, structured and maintained as a
              documentation site.
            </p>

            <div className={styles.heroLinks}>
              <Link to="/docs/">
                Getting Started
              </Link>

              <Link to="/docs/contributing">
                Contributing
              </Link>
            </div>

          </div>
        </section>

        <section className={styles.section}>
          <Heading as="h2">Foundation</Heading>

          <div className={styles.courseList}>

            <Link
              className={styles.course}
              to="/docs/Foundation/English%202/overview"
            >
              <div>
                <h3>English 2</h3>
                <p>Structured notes for English 2.</p>
              </div>

              <span className={styles.arrow}>→</span>
            </Link>

            <Link
              className={styles.course}
              to="/docs/Foundation/Mathematics%201/overview"
            >
              <div>
                <h3>Mathematics 1</h3>
                <p>Structured notes for Mathematics 1.</p>
              </div>

              <span className={styles.arrow}>→</span>
            </Link>

            <Link
              className={styles.course}
              to="/docs/Foundation/Programming%20in%20Python/overview"
            >
              <div>
                <h3>Programming in Python</h3>
                <p>Structured notes for Programming in Python.</p>
              </div>

              <span className={styles.arrow}>→</span>
            </Link>

          </div>
        </section>

      </main>
    </Layout>
  );
}
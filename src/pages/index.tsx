import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Home(): ReactNode {
  return (
    <Layout
      title="BS Data Science Master Notes"
      description="Master notes for the IIT Madras BS Data Science and Applications programme."
    >
      <header className="hero hero--primary">
        <div className="container">
          <Heading as="h1" className="hero__title">
            BS Data Science Master Notes
          </Heading>
          <p className="hero__subtitle">
            Master notes for the IIT Madras BS Data Science and Applications programme
          </p>
        </div>
      </header>

      <main className="container margin-vert--lg">
        <h2>Foundation</h2>

        <h3>
          <Link to="/docs/Foundation/English%202/overview">
            English 2
          </Link>
        </h3>
        <p>Structured notes for English 2.</p>

        <h3>
          <Link to="/docs/Foundation/Mathematics%201/overview">
            Mathematics 1
          </Link>
        </h3>
        <p>Structured notes for Mathematics 1.</p>

        <h3>
          <Link to="/docs/Foundation/Programming%20in%20Python/overview">
            Programming in Python
          </Link>
        </h3>
        <p>Structured notes for Programming in Python.</p>
      </main>
    </Layout>
  );
}
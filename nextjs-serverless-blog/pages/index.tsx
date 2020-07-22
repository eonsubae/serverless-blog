import { Helmet } from 'react-helmet';

import '../styles/components/index.scss';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Eonsu Bae</title>
        <meta name="description" content="A Cutting Edge Engineer from Korea" />
      </Helmet>
      <main className="index-main">
        <section className="introduce-section">
          <div>
            <p>Hello,</p>
          </div>
          <div>
            <h1>I'm Eonsu Bae</h1>
          </div>
          <div>
            <h2>A Cutting Edge Engineer from Korea</h2>
          </div>
          <div>
            <p>Contact Me</p>
          </div>
        </section>
        <section className="photo-section"></section>
      </main>
    </>
  );
}

import { Helmet } from 'react-helmet';

import '../styles/components/index.scss';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Eonsu Bae</title>
        <meta name="description" content="A Cutting Edge Engineer from Korea" />
      </Helmet>
      <main className="index-main">
        <section className="introduce-section">
          <article className="introduce-container">
            <div>
              <p className="introduce__hello">Hello,</p>
            </div>
            <div>
              <h1 className="introduce__name">I'm Eonsu Bae</h1>
            </div>
            <div>
              <h2 className="introduce__pr">
                A Cutting Edge Engineer from South Korea
              </h2>
            </div>
            <div>
              <p className="introduce__contact">Contact Me</p>
            </div>
          </article>
        </section>
        <section className="photo-section"></section>
      </main>
    </>
  );
};

export default Index;

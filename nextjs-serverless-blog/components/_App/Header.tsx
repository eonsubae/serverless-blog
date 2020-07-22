import Link from 'next/link';

import '../../styles/components/_App/header.scss';

const Header = () => (
  <header className="main-header">
    <section className="title-container">
      <Link href="/">
        <a>
          <h1 className="main-header__title">Esbae</h1>
        </a>
      </Link>
    </section>
    <nav className="navi">
      <li>
        <Link href="/">
          <a className="navi__anchor">HOME</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a className="navi__anchor">ABOUT ME</a>
        </Link>
      </li>
      <li>
        <Link href="/practice">
          <a className="navi__anchor">PRACTICE AREAS</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a className="navi__anchor">CONTACT</a>
        </Link>
      </li>
    </nav>
  </header>
);

export default Header;

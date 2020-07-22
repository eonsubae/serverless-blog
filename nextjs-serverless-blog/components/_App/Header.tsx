import Link from 'next/link';

import '../../styles/components/_App/header.scss';
import HeaderLink from './HeaderLink';

const Header = () => (
  <header className="main-header">
    <section className="title-container">
      <Link href="/">
        <a>
          <h1 className="main-header__title">
            <span>Eonsu</span>
            <span>.bae</span>
          </h1>
        </a>
      </Link>
    </section>
    <nav className="navi">
      <HeaderLink path="/" text="HOME" />
      <HeaderLink path="/about" text="ABOUT ME" />
      <HeaderLink path="/practice" text="PRACTICE AREAS" />
      <HeaderLink path="/contact" text="CONTACT" />
    </nav>
  </header>
);

export default Header;

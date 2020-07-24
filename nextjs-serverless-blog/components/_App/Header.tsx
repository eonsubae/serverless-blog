import { useState } from 'react';
import Link from 'next/link';

import '../../styles/components/_App/header.scss';
import HeaderLink from './HeaderLink';

const Header = () => {
  const [isClicked, setIsClicked]: [boolean, Function] = useState(false);

  return (
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
      <nav className="navi-mobile">
        <HeaderLink
          isMobile={true}
          isClicked={isClicked}
          path="/"
          text="HOME"
        />
        <HeaderLink
          isMobile={true}
          isClicked={isClicked}
          path="/about"
          text="ABOUT ME"
        />
        <HeaderLink
          isMobile={true}
          isClicked={isClicked}
          path="/practice"
          text="PRACTICE AREAS"
        />
        <HeaderLink
          isMobile={true}
          isClicked={isClicked}
          path="/contact"
          text="CONTACT"
        />
      </nav>
      <nav
        className="navi-mobile__btn-container"
        onClick={() => setIsClicked(!isClicked)}
      >
        {isClicked ? null : (
          <>
            <div></div>
            <div></div>
            <div></div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;

import { useState } from 'react';
import Link from 'next/link';

import '../../styles/components/_App/header.scss';
import HeaderLink from './HeaderLink';

const Header = () => {
  const [isClicked, setIsClicked]: [boolean, Function] = useState(false);

  const onMobileMenuClicked = () => {
    setIsClicked(!isClicked);
  };

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
      {isClicked ? (
        <nav className="navi-mobile">
          <div className="mobile-menu-close-btn" onClick={onMobileMenuClicked}>
            X
          </div>
          <div className="mobile-menu-container">
            <HeaderLink
              isMobile={true}
              closeMenu={onMobileMenuClicked}
              path="/"
              text="HOME"
            />
            <HeaderLink
              isMobile={true}
              closeMenu={onMobileMenuClicked}
              path="/about"
              text="ABOUT ME"
            />
            <HeaderLink
              isMobile={true}
              closeMenu={onMobileMenuClicked}
              path="/practice"
              text="PRACTICE AREAS"
            />
            <HeaderLink
              isMobile={true}
              closeMenu={onMobileMenuClicked}
              path="/contact"
              text="CONTACT"
            />
          </div>
        </nav>
      ) : null}
      <nav
        className={
          isClicked
            ? ['navi-mobile__btn-container', 'btn-clicked'].join(' ')
            : 'navi-mobile__btn-container'
        }
        onClick={onMobileMenuClicked}
      >
        {isClicked ? null : (
          <>
            <div className="mobile-btn-line"></div>
            <div className="mobile-btn-line"></div>
            <div className="mobile-btn-line"></div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;

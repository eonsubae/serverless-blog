import Link from 'next/link';
import { useRouter } from 'next/router';

import '../../styles/components/_App/header-link.scss';

const HeaderLink = ({
  isMobile,
  closeMenu,
  path,
  text,
}: {
  isMobile?: boolean;
  closeMenu?: Function;
  path: string;
  text: string;
}) => {
  const router = useRouter();
  let classes: Array<string> | string = isMobile
    ? ['navi__anchor--mobile']
    : ['navi__anchor'];

  if (path === router.pathname) {
    classes.push('current-path');
  }

  if (classes.length > 1) {
    classes = classes.join(' ');
  } else {
    classes = classes[0];
  }

  return (
    <li onClick={closeMenu ? () => closeMenu : null}>
      <Link href={path}>
        <a className={classes}>{text}</a>
      </Link>
    </li>
  );
};

export default HeaderLink;

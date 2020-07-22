import Link from 'next/link';
import { useRouter } from 'next/router';

import '../../styles/components/_App/header-link.scss';

const HeaderLink = ({ path, text }) => {
  const router = useRouter();
  let classes: Array<string> | string = ['navi__anchor'];

  if (path === router.pathname) {
    classes.push('current-path');
  }

  if (classes.length > 1) {
    classes = classes.join(' ');
  } else {
    classes = classes[0];
  }

  return (
    <li>
      <Link href={path}>
        <a className={classes}>{text}</a>
      </Link>
    </li>
  );
};

export default HeaderLink;

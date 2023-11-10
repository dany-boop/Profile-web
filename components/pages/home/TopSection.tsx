import { useEffect, useState, forwardRef, memo } from 'react';
import styles from '@/styles/pages/home/Header.module.css';
import classNames from 'classnames/bind';
import Image from 'next/image';

import { useDarkMode } from '@/context/darkMode';

const cx = classNames.bind(styles);

export type imageType = '/img/wp-2.jpeg' | '/img/wp-3.png';
const getImage = (isDark: boolean): imageType =>
  isDark ? '/img/wp-3.png' : '/img/wp-2.jpeg';

const Header = forwardRef<HTMLElement>((props, ref) => {
  const [url, setUrl] = useState<imageType>('/img/wp-2.jpeg');
  const { isDarkTheme } = useDarkMode();

  useEffect(() => {
    setUrl(getImage(isDarkTheme as unknown as boolean));
  }, [isDarkTheme]);

  return (
    <header className={cx({ header: true })} ref={ref}>
      <Image
        src={url}
        alt="Gambar background"
        layout="fill"
        objectFit="cover"
        objectPosition={'center'}
        className={cx({ backgroundImage: true })}
      />
      {/* <div className={styles.content}>
        <h1 className={cx({ heading: true })} ref={typedElement}></h1>
      </div> */}
    </header>
  );
});
Header.displayName = 'Header';

export default memo(Header);

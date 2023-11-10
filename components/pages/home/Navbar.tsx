import { useState, useEffect, useMemo, memo } from 'react';
import type { MutableRefObject } from 'react';

import Image from 'next/image';
import classNames from 'classnames/bind';
import styles from '@/styles/pages/home/Navbar.module.css';

import { useDarkMode } from '@/context/darkMode';

const cx = classNames.bind(styles);

const FotoProfil = memo(function Pfp() {
  return (
    <Image
      className={`logo ${styles.imageProfile}`}
      src="/img/hero-2.jpeg"
      alt="Foto Profil"
      width={45.19}
      height={45.19}
    />
  );
});

type refType = MutableRefObject<HTMLElement>;

export interface NavbarInterface {
  topRef: refType;
  introductionRef: refType;
  skillRef: refType;
  projectsRef: refType;
  contactRef: refType;
}

export interface NavigationInterface {
  text: string;
  ref: refType;
}

function Navbar(props: NavbarInterface) {
  const { isDarkTheme, toggleTheme } = useDarkMode();
  const [checked, setChecked] = useState<boolean>(false);
  const [transparent, setTransparent] = useState<boolean>(true);

  useEffect(() => {
    window.onscroll = () => {
      const header = document.querySelector('header');
      const fixNav = header?.offsetTop ?? 0;

      if (window.pageYOffset > fixNav) {
        setTransparent(false);
      } else {
        setTransparent(true);
      }
    };
    return () => {
      window.onscroll = null;
    };
  }, []);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) =>
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           if (entry.intersectionRatio <= 0.85) setTransparent(false);
  //           else setTransparent(true);
  //         } else {
  //           if (transparent) setTransparent(false);
  //         }
  //       }),
  //     { threshold: [1, 0.89, 0.86, 0.85, 0.8, 0.75, 0.7, 0.5, 0.25, 0] }
  //   );

  //   observer.observe(props.topRef.current);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const navigation = useMemo<NavigationInterface[]>(
    () => [
      {
        text: 'About Me',
        ref: props.introductionRef,
      },
      {
        text: 'Skills',
        ref: props.skillRef,
      },
      {
        text: 'Projects',
        ref: props.projectsRef,
      },
      {
        text: 'Contact Me',
        ref: props.contactRef,
      },
    ],
    [props.introductionRef, props.skillRef, props.projectsRef, props.contactRef]
  );

  return (
    <nav className={cx({ transparent })}>
      <a
        href="#"
        className="brand"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <FotoProfil />
        <span className={styles.spanNama}>Moh. Dhany Asmoro</span>
      </a>
      <input
        id="bmenub"
        type="checkbox"
        className="show"
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
      />
      <label htmlFor="bmenub" className="burger pseudo button">
        &#8801;
      </label>

      <div className={`menu ${styles.menu}`}>
        {navigation.map((nav) => (
          <a
            key={nav.text}
            className={`pseudo button icon-picture  ${cx({
              transparentDarker: transparent,
              regular: transparent,
            })}`}
            onClick={() => {
              nav.ref.current.scrollIntoView({
                behavior: 'smooth',
              });

              if (checked) setChecked(false);
            }}
          >
            {nav.text}
          </a>
        ))}

        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={isDarkTheme || false}
            onChange={toggleTheme}
            className={styles.checkboxInput}
          />
          <span className={cx({ slider: true, sliderRound: true })}></span>
        </label>
      </div>
    </nav>
  );
}

export default memo(Navbar);

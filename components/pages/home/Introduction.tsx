import { forwardRef, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import classNames from 'classnames/bind';
import styles from '@/styles/pages/home/Introduction.module.css';

export interface propsInterface {
  time: number;
}

const Introduction = forwardRef<HTMLElement, propsInterface>((props, ref) => {
  const typedElement = useRef(null!);
  const cx = classNames.bind(styles);

  useEffect(() => {
    const type = new Typed(typedElement.current, {
      strings: [
        'Front-End Developer',
        'Front-End Developer',
        'dany-boop',
        'Dany Asmoro',
      ],
      typeSpeed: 55,
      backSpeed: 50,

      loop: true,
      showCursor: false,
    });

    return () => {
      type.destroy();
    };
  }, []);

  return (
    <>
      <section>
        <div className={styles.textContainer}>
          <h1 className={cx({ heading1: true })} ref={typedElement}></h1>
        </div>
      </section>

      <section className={styles.container} ref={ref}>
        <h1 className={styles.heading}>About Me</h1>
        <div className="flex one two-1200">
          <div>
            <p className={styles.text}>
              Hello Im Dany Im a Creative web developer that currently studying
              in Binus Online Learning.Major in Information System Im skilled in
              HTML, CSS, and JavaScript,Im {props.time} years old and I focus on
              creating user-friendly websites. Im familiar with modern web
              frameworks like React and Next.js, and I can work with APIs to
              connect to data. I pay attention to detail, collaborate well with
              others, and stay updated with industry trends to deliver top-notch
              web solutions.
              {/* Perkenalkan,
          Nama saya Ezra Khairan Permana atau biasa dipanggil Ezra. Saat ini
          saya berumur tahun. Saya tinggal dan tinggal di Bekasi, Jawa Barat.
          Masih duduk dibangku sekolah SMA, bersekolah di SMA Negeri 12 Kota
          Bekasi kelas XI Bahasa. Sekarang sedang mempelajari bahasa C++ dan
          hal-hal yang berkaitan dengan arduino. */}
            </p>
          </div>
          <div>
            <img
              className={styles.img}
              src="/img/hero-1.jpeg"
              alt="Foto Profil"
              width={45.19}
              height={45.19}
            />
          </div>
        </div>
      </section>
    </>
  );
});
Introduction.displayName = 'Introduction';

export default Introduction;

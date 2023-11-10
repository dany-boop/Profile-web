import Image from 'next/image';
import { forwardRef } from 'react';
import Icon from '@/components/Icon';
import styles from '@/styles/pages/home/Projects.module.css';

export interface ProjectInterface {
  // image: string;
  repo: string;
  text: string;
  web?: string;
}

const ProjectsData: ProjectInterface[] = [
  {
    repo: 'poptour',
    text: 'Pop Tour is a website for booking tour packages for Mount Bromo, 3 Colors Beach, and Tumpak Sewu Waterfall as well as other tourist destinations in East Java to make it easier for users if they want to take a vacation to fill their free time amidst your busy daily activities. Made with Next js and Tailwindcss that was integrated with Whatsapp API, Xata.io, Cloudinary, and also NodeMailer to make user easily connect with POP Tour.',
    web: 'https://www.poptour.id/',
  },
  {
    repo: 'skild-portal',
    text: 'Skild is a job portal Website from Hawai its still under develop like 90% done.made with PHP native, Sass, PostgreSQL, and supabase for the cloud database .',
    web: 'https://skild-portal.mydevteam.id/',
  },
  {
    repo: 'ukk-hotel',
    text: 'Repositori untuk belajar bahasa pemrograman Javascript berbahasa Indonesia. Berisikan materi dasar hingga lanjutan.',
  },
  {
    repo: 'UKL-Laundry',
    text: 'Repositori monorepo yang menaungi package-package yang digunakan untuk Organisasi Bellshade.',
  },
  // {
  //   repo: 'reacto11mecha/auto-attendance',
  //   text: 'Bot absensi masuk dan keluar yang berjalan otomatis menggunakan puppeteer. Dapat dijalankan tanpa perlu VPS maupun hosting.',
  // },
  // {
  //   repo: 'reacto11mecha/nesbaen',
  //   text: 'Bot Whatsapp yang digunakan untuk keperluan absensi guru dan siswa. Dibuat dengan menggunakan Node.js dan MongoDB.',
  // },
];

const Projects = forwardRef<HTMLElement>((props, ref) => (
  <section className={styles.container} ref={ref}>
    <h1 className={styles.heading}>Projects</h1>
    <p className={styles.text}>Here`s My Recent Projects</p>

    <div className={`flex one two-800 ${styles.projectContainer}`}>
      {ProjectsData.map((project) => (
        <div key={project.repo}>
          <article className={`card ${styles.card}`}>
            <header>
              <div className={styles.imageWrapper}>
                <img
                  src={`/img/${project.repo}.png`}
                  alt={`Gambar open graph github dari repositor https://github.com/${project.repo}`}
                />
              </div>
              <h4 className={styles.repoName}>{project.repo}</h4>
              <p className={styles.repoText}>{project.text}</p>
            </header>
            <footer className={styles.projectFooter}>
              <a
                className={styles.projectAnchor}
                href={`https://github.com/dany-boop/${project.repo}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icon icon="github" />
              </a>

              {project?.web && (
                <>
                  {'  '}
                  <a
                    href={project.web}
                    className={styles.projectAnchor}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Icon icon="web" />
                  </a>
                </>
              )}
            </footer>
          </article>
        </div>
      ))}
    </div>
  </section>
));
Projects.displayName = 'Projects';

export default Projects;

import Image from 'next/image';
import { forwardRef } from 'react';
import { FC } from 'react';
import Icon, {
  Javascript,
  NextJS,
  TypeScript,
  CSS,
  Sass,
  PHP,
  Markdown,
  Astro,
  Bootstrap,
  Express,
  JQuery,
  Laravel,
  MySQL,
  PostgreSQL,
  Python,
  Supabase,
  Tailwind,
  VueJS,
  React,
  NodeJS,
  MongoDB,
  Java,
  Jest,
} from '@/components/Icon';
import styles from '@/styles/pages/home/Projects.module.css';
import { text } from 'stream/consumers';

// const IconItem = [
//   { text: 'TypeScript', icon: <TypeScript /> },
//   { text: 'Javascript', icon: <Javascript /> },
//   { text: 'CSS', icon: <CSS /> },
//   { text: 'Sass', icon: <Sass /> },
//   { text: 'PHP', icon: <PHP /> },
//   { text: 'Markdown', icon: <Markdown /> },
//   { text: 'Python ', icon: <Python /> },
//   { text: 'Astro', icon: <Astro /> },
//   { text: 'NextJS', icon: <NextJS /> },
//   { text: 'ReactJS', icon: <React /> },
//   { text: 'VueJS', icon: <VueJS /> },
//   { text: 'Laravel', icon: <Laravel /> },
//   { text: 'Tailwind', icon: <Tailwind /> },
//   { text: 'Bootstrap', icon: <Bootstrap /> },
//   { text: 'NodeJS', icon: <NodeJS /> },
//   { text: 'PostgreSQL', icon: <PostgreSQL /> },
//   { text: 'ExpressJS', icon: <Express /> },
//   { text: 'JQuery', icon: <JQuery /> },
//   { text: 'MySQL', icon: <MySQL /> },
//   { text: 'MongoDB', icon: <MongoDB /> },
//   { text: 'Supabase', icon: <Supabase /> },
// ];
export interface ProjectInterface {
  // image: string;
  repo: string;
  text: string;
  web?: string;
  icon: JSX.Element[];
}

const ProjectsData: ProjectInterface[] = [
  {
    repo: 'poptour',
    text: 'Pop Tour is a website for booking tour packages in East Java to make it easier for users if they want to take a vacation to fill their free time amidst your busy daily activities. Made with Next js and Tailwindcss that was integrated with Whatsapp API, Xata.io, Cloudinary, and also NodeMailer to make user easily connect with POP Tour.',
    web: 'https://www.poptour.id/',
    icon: [<TypeScript />, <NextJS />, <Tailwind />],
  },
  {
    repo: 'skild-portal',
    text: 'Skild is a job portal Website from Hawai its still under develop like 90% done.made with PHP native, Sass, PostgreSQL, and supabase for the cloud database .',
    web: 'https://skild-portal.mydevteam.id/',
    icon: [<PHP />, <Javascript />, <JQuery />, <Sass />, <PostgreSQL />],
  },
  {
    repo: 'ukk-hotel',
    text: 'This Repository is a Final Test at SMK Telkom Malang it`s a hotel booking Apps that have features like the Payment Gateway , filtering , user authorization, etc.Made with NextJs for the framework and tailwind css for the css library and also i`m using Mysql for the database .  ',
    icon: [<Javascript />, <NextJS />, <MySQL />, <NodeJS />, <Tailwind />],
  },
  {
    repo: 'Blog',
    text: 'This Repository is for learning Laravel and also VueJs this is blog post website that have a some features such a user Register and authenticate,user authorization,CRUD Blog Post,Resizing Image,etc. Made With Laravel and VueJs and also using Tailwind css and MySql  ',
    icon: [<Laravel />, <VueJS />, <MySQL />, <Tailwind />],
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
            <div className="flex ">
              <p key={project.repo} className={styles.repoIcon}>
                {project.icon}
              </p>
            </div>
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

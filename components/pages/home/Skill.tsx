import { forwardRef } from 'react';
import {
  AfterEffects,
  Astro,
  Babel,
  Bitbucket,
  Blender,
  Bootstrap,
  CPP,
  CS,
  CSS,
  Embed,
  Express,
  Figma,
  Firebase,
  Git,
  Github,
  Gitlab,
  GoLang,
  HTML,
  Illustrator,
  JQuery,
  Java,
  Javascript,
  Jira,
  Laravel,
  Markdown,
  MongoDB,
  MySQL,
  Netlify,
  NextJS,
  NodeJS,
  Notion,
  PHP,
  Photoshop,
  PostgreSQL,
  Postman,
  Premiere,
  Prisma,
  Python,
  React,
  Sass,
  Supabase,
  Tailwind,
  Trello,
  TypeScript,
  Vercel,
  VueJS,
  Wordpress,
} from '@/components/Icon';
// import type { iconType } from '@/components/Icon';
import styles from '@/styles/pages/home/Skill.module.css';

// export interface CardItem {
//   text: string;
//   // icon: iconType;
// }

const IconItem = [
  { text: 'TypeScript', icon: <TypeScript /> },
  { text: 'Javascript', icon: <Javascript /> },
  { text: 'GoLang ', icon: <GoLang /> },
  { text: 'Java', icon: <Java /> },
  { text: 'HTML ', icon: <HTML /> },
  { text: 'CSS', icon: <CSS /> },
  { text: 'Sass', icon: <Sass /> },
  { text: 'PHP', icon: <PHP /> },
  { text: 'Next.js', icon: <CPP /> },
  { text: 'C#', icon: <CS /> },
  { text: 'Markdown', icon: <Markdown /> },
  { text: 'Python ', icon: <Python /> },
  { text: 'Astro', icon: <Astro /> },
  { text: 'NextJS', icon: <NextJS /> },
  { text: 'ReactJS', icon: <React /> },
  { text: 'VueJS', icon: <VueJS /> },
  { text: 'Laravel', icon: <Laravel /> },
  { text: 'Tailwind', icon: <Tailwind /> },
  { text: 'Bootstrap', icon: <Bootstrap /> },
  { text: 'NodeJS', icon: <NodeJS /> },
  { text: 'PostgreSQL', icon: <PostgreSQL /> },
  { text: 'Prisma', icon: <Prisma /> },
  { text: 'ExpressJS', icon: <Express /> },
  { text: 'JQuery', icon: <JQuery /> },
  { text: 'Babel', icon: <Babel /> },
  { text: 'Wordpress', icon: <Wordpress /> },
  { text: 'MySQL', icon: <MySQL /> },
  { text: 'MongoDB', icon: <MongoDB /> },
  { text: 'Supabase', icon: <Supabase /> },
  { text: 'Firebase', icon: <Firebase /> },
  { text: 'Postman', icon: <Postman /> },
  { text: 'Netlify', icon: <Netlify /> },
  { text: 'Vercel', icon: <Vercel /> },
  { text: 'Git', icon: <Git /> },
  { text: 'Gitlab', icon: <Gitlab /> },
  { text: 'Github', icon: <Github /> },
  { text: 'Bitbucket', icon: <Bitbucket /> },
  { text: 'Trello', icon: <Trello /> },
  { text: 'Jira', icon: <Jira /> },
  { text: 'Notion', icon: <Notion /> },
  { text: 'Trello', icon: <Trello /> },
  { text: 'Figma', icon: <Figma /> },
  { text: 'Illustrator', icon: <Illustrator /> },
  { text: 'Photoshop', icon: <Photoshop /> },
  { text: 'AfterEffects', icon: <AfterEffects /> },
  { text: 'Premiere', icon: <Premiere /> },
  { text: 'Blender', icon: <Blender /> },
];

const Skill = forwardRef<HTMLElement>((props, ref) => (
  <section className={styles.container} ref={ref}>
    <h1 className={`flex one ${styles.heading}`}>
      <span className={styles.hicon}>
        <Embed />
      </span>
      Skills
    </h1>
    <div className="flex one two-700 four-1200">
      {IconItem.map((f, i) => (
        <div key={i} className={`flex one ${styles.cardItem}`}>
          <p className={styles.CardItem} style={{ width: '1em' }}>
            {/* <Icon icon={card.icon} style={{ width: '1em' }} /> {card.icon} */}
            {f.icon}
          </p>
          {/* <article className={`card ${styles.card}`}>
            <header className={styles.header}>
              <h3 className={styles.cardHeading}>{card.text}</h3>

              <div className={`flex one ${styles.cardItemList}`}>
                {cards.map((card) => (
                  <div key={card.icon}>
                    <p className={styles.CardItem}>
                      <Icon icon={card.icon} style={{ width: '1em' }} />{' '}
                      {card.icon}
                    </p>
                  </div>
                ))}
              </div>
            </header>
          </article> */}
        </div>
      ))}
    </div>
  </section>
));
Skill.displayName = 'Skill';

export default Skill;

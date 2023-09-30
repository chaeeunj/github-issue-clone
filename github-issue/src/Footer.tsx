import styles from './Footer.module.css';

const URL_PREFIX = 'https://docs.github.com/ko/site-policy';

const footerItems = [
  {
    title: 'Terms',
    link: `${URL_PREFIX}/github-terms/github-terms-of-service`,
  },
  {
    title: 'Privacy',
    link: `${URL_PREFIX}/privacy-policies/github-privacy-statement`,
  },
  {
    title: 'Security',
    link: 'https://www.githubstatus.com',
  },
  {
    title: 'Status',
    link: 'https://www.githubstatus.com',
  },
  {
    title: 'Docs',
    link: 'https://docs.github.com/ko',
  },
  {
    title: 'Contact GitHub',
    link: 'https://support.github.com/?tags=dotcom-footer',
  },
  {
    title: 'Pricing',
    link: 'https://github.com/pricing',
  },
  {
    title: 'API',
    link: 'https://docs.github.com/ko',
  },
  {
    title: 'Training',
    link: 'https://github.com/services/',
  },
  {
    title: 'Blog',
    link: 'https://github.blog/',
  },
  {
    title: 'About',
    link: 'https://github.com/about',
  },
];

function Footer() {
  return (
    <ul className={styles.footer}>
      {footerItems.map(({ title, link }) => (
        <li className={styles.item} key={title}>
          <a className={styles.link} href={link}>
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Footer;

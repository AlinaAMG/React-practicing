import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()}
        <span> usePopcorn by Alina. All rights reserved.</span>
      </p>
      <p>
        <a
          href="https://github.com/AlinaAMG/React-practicing/tree/movieApp-frontend"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        |
        <a
          href="https://www.linkedin.com/in/alina-gabur-2ab539309/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </footer>
  );
}

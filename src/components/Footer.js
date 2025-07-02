import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} My Movie App. All rights reserved.</p>
    </footer>
    )
}

export default Footer

import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        SHED626 <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} /> 2022
      </footer>
    </>
  )
}

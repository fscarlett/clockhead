import styles from '../../styles/Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles['footer-wrapper']}>
          <p>footer</p>
        </div>
      </div>
    </footer>
  )
}
export default Footer

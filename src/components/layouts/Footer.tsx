import styles from '../../styles/Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles['footer-wrapper']}>
          <div className={styles['footer-left']}>footer nav</div>
          <div className={styles['footer-right']}>
            <p>25601 Kifer Road</p>
            <p>Santa Clara, CA 95051</p>
            <p>United States</p>
            <p>+1 (408) 555-1212</p>
            <p>tollbooth@clockheadista.com</p>

            <p className={styles['footer-copyright']}>
              Copyright © 2026 Infantibulum Holdings LLC, DBA Clockhead. <br />
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer

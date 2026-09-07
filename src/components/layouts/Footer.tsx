import { NavLink } from 'react-router'
import styles from '../../styles/Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className='footer-container'>
        <div className={styles['footer-wrapper']}>
          <div className={styles['footer-left']}>
            <NavLink to='/' className={styles['footer-logo']}>
              <img src='/clockhead-logo-01-small.png' alt='Clockhead Logo' />
            </NavLink>
            <NavLink to='/privacy-policy' className={styles['footer-link']}>
              Privacy Policy
            </NavLink>
            <NavLink to='/terms-of-service' className={styles['footer-link']}>
              Terms of Service
            </NavLink>
          </div>
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

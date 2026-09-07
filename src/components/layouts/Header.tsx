import { NavLink } from 'react-router'
import styles from '../../styles/Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className='header-container'>
        <div className={styles['nav-wrapper']}>
          <div className={styles['nav-left']}>
            <NavLink to='/' className={styles['nav-logo']}>
              <img src='/clockhead-logo-01-small.png' alt='Clockhead Logo' />
            </NavLink>
            <nav className={styles['nav-menu']}>
              <NavLink to='/about' className={styles['nav-link']}>
                About Us
              </NavLink>
              <NavLink to='/shop' className={styles['nav-link']}>
                Shop
              </NavLink>
              <NavLink to='/blog' className={styles['nav-link']}>
                Blog
              </NavLink>
              <NavLink to='/finder' className={styles['nav-link']}>
                Store Finder
              </NavLink>
            </nav>
          </div>
          <div className={styles['nav-right']}>
            <div className={styles['nav-menu']}>
              <NavLink to='/support' className={styles['nav-link']}>
                Support
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header

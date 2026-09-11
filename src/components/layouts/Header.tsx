import { NavLink } from 'react-router'
import styles from '../../styles/Header.module.css'

// CSS Modules hash class names, so NavLink's literal "active" class must be mapped to styles.active manually
const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
  isActive ? `${styles['nav-link']} ${styles.active}` : styles['nav-link']

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
              <NavLink to='/about' className={navLinkClassName}>
                About Us
              </NavLink>
              <NavLink to='/shop' className={navLinkClassName}>
                Shop
              </NavLink>
              <NavLink to='/blog' className={navLinkClassName}>
                Blog
              </NavLink>
              <NavLink to='/finder' className={navLinkClassName}>
                Store Finder
              </NavLink>
            </nav>
          </div>
          <div className={styles['nav-right']}>
            <div className={styles['nav-menu']}>
              <NavLink to='/support' className={navLinkClassName}>
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

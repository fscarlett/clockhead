import styles from '../../styles/Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className='container '>
        <div className={styles['nav-wrapper']}>
          <div className={styles['nav-left']}>
            <a href='/' className={styles['nav-logo']}>
              <img src='/logo.svg' alt='Clockhead Logo' />
            </a>
            <nav className={styles['nav-menu']}>
              <a href='/about' className={styles['nav-link']}>
                About
              </a>
              <a href='/blog' className={styles['nav-link']}>
                Blog
              </a>
            </nav>
          </div>
          <div className={styles['nav-right']}>
            <div className={styles['nav-menu']}>
              <a href='/docs' className={styles['nav-link']}>
                Docs
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header

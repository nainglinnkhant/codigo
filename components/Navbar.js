import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import codigoLogo from '../public/codigo-logo.svg'
import styles from '../styles/Navbar.module.scss'

const getViewWidth = () => {
    return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
}

export default function Navbar() {
    const router = useRouter()
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [viewWidth, setViewWidth] = useState(null)

    const handleCloseMobileMenu = () => setShowMobileMenu(false)

    const handleWindowResize = () => {
        setViewWidth(getViewWidth())
    }

    useEffect(() => {
        setViewWidth(getViewWidth())

        window.addEventListener('resize', handleWindowResize)

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])

    return (
        <div className={styles['navigation-container']}>
            <nav className={styles.navigation}>
                <a onClick={() => router.push('/')}>
                    <Image src={codigoLogo} width='145' height='19' alt='Codigo Logo' />
                </a>

                <div>
                    <div
                        className={styles['navigation-background']}
                        style={{
                            transform: showMobileMenu
                                ? `scale(${18.5 + (2.5 * viewWidth) / 100})`
                                : undefined,
                        }}
                    ></div>

                    <ul
                        className={styles['navigation-btn']}
                        onClick={() => setShowMobileMenu((prevState) => !prevState)}
                    >
                        <li
                            className={`${styles.bar1} ${showMobileMenu ? styles.open : undefined}`}
                        ></li>

                        <li
                            className={`${styles.bar2} ${showMobileMenu ? styles.open : undefined}`}
                        ></li>

                        <li
                            className={`${styles.bar3} ${showMobileMenu ? styles.open : undefined}`}
                        ></li>

                        <li
                            className={`${styles.bar4} ${showMobileMenu ? styles.open : undefined}`}
                        ></li>
                    </ul>
                </div>

                {showMobileMenu && (
                    <ul className={styles['navigation-mobile']}>
                        <li onClick={handleCloseMobileMenu}>
                            <div>
                                <Link href='/work'>Work</Link>
                            </div>
                        </li>

                        <li onClick={handleCloseMobileMenu}>
                            <Link href='/'>Solutions</Link>
                        </li>

                        <li onClick={handleCloseMobileMenu}>
                            <Link href='/'>Services</Link>
                        </li>

                        <li onClick={handleCloseMobileMenu}>
                            <Link href='/'>About us</Link>
                        </li>

                        <li onClick={handleCloseMobileMenu}>
                            <Link href='/'>Blog</Link>
                        </li>

                        <li>
                            <Link href='/'>Request a quote</Link>
                        </li>

                        <li>
                            <Link href='/'>Let&apos;s chat</Link>
                        </li>

                        <li className='flex justify-center mt-12'>
                            <i className='fab fa-facebook-f'></i>
                            <i className='fab fa-twitter'></i>
                            <i className='fab fa-instagram'></i>
                            <i className='fab fa-linkedin-in'></i>
                        </li>
                    </ul>
                )}

                <ul className={styles['navigation-desktop']}>
                    <li className={router.asPath.startsWith('/work') ? styles.active : ''}>
                        <Link href='/work'>Work</Link>
                    </li>

                    <li>
                        <Link href='/'>Solutions</Link>
                    </li>

                    <li>
                        <Link href='/'>Services</Link>
                    </li>

                    <li>
                        <Link href='/'>About us</Link>
                    </li>

                    <li>
                        <Link href='/'>Blog</Link>
                    </li>

                    <li className={styles.button}>Request a quote</li>
                </ul>
            </nav>
        </div>
    )
}

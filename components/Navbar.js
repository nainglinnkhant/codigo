import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import codigoLogo from '../public/codigo-logo.svg'
import styles from '../styles/Navbar.module.scss'

export default function Navbar() {
    const router = useRouter()
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const handleCloseMobileMenu = () => setShowMobileMenu(false)

    return (
        <nav className={styles.navigation}>
            <a onClick={() => router.push('/')}>
                <Image src={codigoLogo} width='145' height='19' alt='Codigo Logo' />
            </a>

            <button
                className={styles['navigation-btn']}
                onClick={() => setShowMobileMenu((prevState) => !prevState)}
            >
                <div
                    className={`${styles['navigation-background']} ${
                        showMobileMenu ? styles.open : undefined
                    }`}
                ></div>

                <ul className={styles.bars}>
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
            </button>

            <div
                className={`${styles['navigation-mobile']} ${
                    showMobileMenu ? styles.open : undefined
                }`}
            >
                <ul>
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
            </div>

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
    )
}

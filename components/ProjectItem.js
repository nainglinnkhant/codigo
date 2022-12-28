import Image from 'next/image'
import appIcon from '../public/ico-app.svg'
import webIcon from '../public/ico-web.svg'
import cmsIcon from '../public/ico-cms.svg'
import uiuxIcon from '../public/ico-uiux.svg'
import styles from '../styles/ProjectItem.module.scss'

const icons = [appIcon, webIcon, cmsIcon, uiuxIcon]

export default function ProjectItem({ project, link = '#' }) {
    const span = `col-span-${project.span}`

    return (
        <a href={link} className={`${span} ${styles['project-item-link']}`}>
            <div className={styles.overlay}></div>

            <img
                src={`/${project.image}.jpg`}
                alt='Project Image'
                className={styles['project-item-image']}
            />

            <div className={styles['project-item-info']}>
                <div className={project.contrastText ? styles['contrast-text'] : ''}>
                    <p>{project.category}</p>
                    <h2>{project.name}</h2>
                </div>

                <ul className={styles['project-item-platforms']}>
                    {icons.map((icon, index) => (
                        <li
                            className='flex justify-center items-center rounded-full bg-white w-8 h-8 relative mr-2.5'
                            key={index}
                        >
                            <Image src={icon} width='18px' height='18px' alt='Icon' />
                        </li>
                    ))}
                </ul>
            </div>
        </a>
    )
}

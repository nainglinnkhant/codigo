import Image from 'next/image'
import appIcon from '../public/ico-app.svg'
import webIcon from '../public/ico-web.svg'
import cmsIcon from '../public/ico-cms.svg'
import uiuxIcon from '../public/ico-uiux.svg'
import styles from '../styles/WorkHeader.module.scss'

export default function WorkHeader() {
    return (
        <div className={styles['work-header']}>
            <h1>Here's 5% of</h1>
            <h2>our published work.</h2>
            <h3>See 100% of our power.</h3>

            <div className={styles['work-categories-container']}>
                <ul className={styles['work-categories']}>
                    <li>
                        <a>All</a>
                    </li>
                    <li>
                        <a>Food & Beverage</a>
                    </li>
                    <li>
                        <a>Media</a>
                    </li>
                    <li>
                        <a>Transport & Logistics</a>
                    </li>
                    <li>
                        <a>Banking & Finance</a>
                    </li>
                    <li>
                        <a>Lifestyle</a>
                    </li>
                    <li>
                        <a>Co-incubation</a>
                    </li>
                    <li>
                        <a>Healthcare</a>
                    </li>
                    <li>
                        <a>Retail & Entertainment</a>
                    </li>
                    <li>
                        <a>Telco</a>
                    </li>
                    <li>
                        <a>Others</a>
                    </li>
                    <li>
                        <a>Start-ups</a>
                    </li>
                </ul>

                <div className={styles['work-legend']}>
                    <div className='mt-10'>
                        <h4>Legend</h4>

                        <div className={styles['legend-grid']}>
                            <div className={styles['legend-item']}>
                                <Image src={appIcon} width='13px' height='13px' alt='App Icon' />
                                <p className='text-xs ml-2'>APP</p>
                            </div>

                            <div className={styles['legend-item']}>
                                <Image src={webIcon} width='13px' height='13px' alt='Web Icon' />
                                <p className='text-xs ml-2'>WEB</p>
                            </div>

                            <div className={styles['legend-item']}>
                                <Image src={cmsIcon} width='13px' height='13px' alt='CMS Icon' />
                                <p className='text-xs ml-2'>CMS</p>
                            </div>

                            <div className={styles['legend-item']}>
                                <Image src={uiuxIcon} width='13px' height='13px' alt='UI/UX Icon' />
                                <p className='text-xs ml-2'>UI/UX</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

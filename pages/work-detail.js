import React, { useCallback, useEffect, useState } from 'react'
import styles from '../styles/WorkDetail.module.scss'

const images = [
    'https://cdn.codigo.co/uploads/2021/04/PAO-1.png',
    'https://cdn.codigo.co/uploads/2021/04/PAO-2-1.png',
    'https://cdn.codigo.co/uploads/2021/04/PAO-3.png',
    'https://cdn.codigo.co/uploads/2021/04/PAO-4-1.png',
    'https://cdn.codigo.co/uploads/2021/04/PAO-5.png',
]

const WorkDetail = () => {
    const [imageIndex, setImageIndex] = useState(0)
    const [mounted, setMounted] = useState(false)

    const changeImageIndex = useCallback(() => {
        if (imageIndex === images.length - 1) {
            return setImageIndex(0)
        }

        setImageIndex((prevIndex) => prevIndex + 1)
    }, [imageIndex])

    useEffect(() => {
        setMounted(true)

        const interval = setInterval(changeImageIndex, 5000)

        return () => clearInterval(interval)
    }, [changeImageIndex])

    return (
        <div className={styles.container}>
            <section className={styles.description}>
                <h1>OCBC Pay Anyone</h1>

                <p>
                    You can now pay kopitiam uncles, merchants, peers, and dears with the OCBC Pay
                    Anyone app, and you can even withdraw cash by scanning the QR code at OCBC’s
                    ATMs without your card!
                </p>

                <div className={styles.features}>
                    <h2>Key Features</h2>

                    <ul>
                        <li>Scan to pay</li>
                        <li>Transfer cash and request payment</li>
                        <li>ATM QR cash withdrawal</li>
                        <li>Access exclusive discounts and promotions</li>
                    </ul>
                </div>
            </section>

            <section className={styles.preview}>
                <h1>OCBC Pay Anyone</h1>

                <div className={styles['image-container']}>
                    {mounted && (
                        <>
                            <img
                                src={images[0]}
                                className={imageIndex === 0 ? styles.active : undefined}
                                alt='preview-1'
                            />

                            <img
                                src={images[1]}
                                className={imageIndex === 1 ? styles.active : undefined}
                                alt='preview-1'
                            />

                            <img
                                src={images[2]}
                                className={imageIndex === 2 ? styles.active : undefined}
                                alt='preview-1'
                            />

                            <img
                                src={images[3]}
                                className={imageIndex === 3 ? styles.active : undefined}
                                alt='preview-1'
                            />

                            <img
                                src={images[4]}
                                className={imageIndex === 4 ? styles.active : undefined}
                                alt='preview-1'
                            />
                        </>
                    )}
                </div>

                <ul>
                    {images.map((_, index) => (
                        <li
                            key={index}
                            onClick={() => setImageIndex(index)}
                            className={index === imageIndex ? styles.active : undefined}
                        />
                    ))}
                </ul>
            </section>
        </div>
    )
}

export default WorkDetail

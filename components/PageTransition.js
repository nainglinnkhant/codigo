import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import styles from '../styles/PageTransition.module.scss'

export default function PageTransition({ children }) {
    const router = useRouter()

    const firstRender = useRef(true)
    const [completeTransition, setCompleteTransition] = useState(true)

    useEffect(() => {
        firstRender.current = false
    }, [])

    return (
        <AnimatePresence exitBeforeEnter key={router.route} initial={!firstRender.current}>
            <>
                <motion.div
                    className={styles['transition-bg']}
                    initial={{ display: 'block' }}
                    animate={{ display: 'none' }}
                    transition={{ delay: 1 }}
                    onAnimationComplete={() => setCompleteTransition(true)}
                >
                    <motion.div
                        className={styles['transition-item']}
                        initial={{ x: -500 }}
                        animate={{ x: 4000 }}
                        transition={{ duration: 2, ease: 'easeInOut' }}
                        onAnimationStart={() => setCompleteTransition(false)}
                    />
                </motion.div>

                {completeTransition && children}
            </>
        </AnimatePresence>
    )
}

import React from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';
import { useRouter } from 'next/router';

const Navigation = () => {
    const router = useRouter();

    return (
        <nav>
            <ul className={styles.navigation}>
                <li className={router.pathname == '/static' ? styles.active : ''}><Link href="/static">Static</Link></li>
                <li className={router.pathname == '/server' ? styles.active : ''}><Link href="/server">SSR</Link></li>
                <li className={router.pathname == '/static-isr' ? styles.active : ''}><Link href="/static-isr">Static + ISR</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;
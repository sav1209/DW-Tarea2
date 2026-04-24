import React from 'react';
import styles from './Footer.module.css';
import styles2 from '../Header/Header.module.css';
import Link from 'next/link';

export default function Footer() {
    const brand = {
        name: 'Saúl Villeda López',
        text: 'Gracias por visitar mi portfolio. ¡Espero que podamos trabajar juntos pronto!',
    };

    const socialLinks = [
        {
            href: 'https://www.linkedin.com/in/sav1209/',
            iconClassName: 'fab fa-linkedin-in',
            ariaLabel: 'LinkedIn',
            isExternal: true,
        },
        {
            href: 'https://github.com/sav1209',
            iconClassName: 'fab fa-github',
            ariaLabel: 'GitHub',
            isExternal: true,
        },
        {
            href: 'mailto:saul9084@gmail.com',
            iconClassName: 'fas fa-envelope',
            ariaLabel: 'Email',
            isExternal: false,
        },
    ];

    const footerMeta = {
        copyright: '© 2026 Saúl. Todos los derechos reservados.',
        madePrefix: 'Hecho con',
        madeSuffix: 'y mucho',
    };

    return (
        <footer className={styles.footer ?? 'footer'} id="footer">
            <div className="container">
                <div className={styles.footer__content ?? 'footer__content'}>
                    <div className={styles.footer__brand ?? 'footer__brand'}>
                        <Link href="#" className={styles.footer__logo ?? 'footer__logo'}>
                            <span className={styles2.logo__bracket}>&lt;</span>
                            {brand.name}
                            <span className={styles2.logo__bracket}>/&gt;</span>
                        </Link>
                        <p className={styles.footer__text ?? 'footer__text'}>{brand.text}</p>
                    </div>

                    <div className={styles.footer__social ?? 'footer__social'}>
                        {socialLinks.map((social) => (
                            <Link
                                key={social.ariaLabel}
                                href={social.href}
                                target={social.isExternal ? '_blank' : undefined}
                                rel={social.isExternal ? 'noopener noreferrer' : undefined}
                                className={styles['footer__social-link'] ?? 'footer__social-link'}
                                aria-label={social.ariaLabel}
                            >
                                <i className={social.iconClassName}></i>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className={styles.footer__bottom ?? 'footer__bottom'}>
                    <p className={styles.footer__copyright ?? 'footer__copyright'}>{footerMeta.copyright}</p>
                    <p className={styles.footer__made ?? 'footer__made'}>
                        {footerMeta.madePrefix} <i className="fas fa-heart"></i> {footerMeta.madeSuffix}{' '}
                        <i className="fas fa-coffee"></i>
                    </p>
                </div>
            </div>
        </footer>
    );
}
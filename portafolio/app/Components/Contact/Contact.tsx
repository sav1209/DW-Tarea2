import React from 'react';
import styles from './Contact.module.css';
import Link from 'next/link';

export default function Contact() {
    const sectionContent = {
        subtitle: '¿Tienes un proyecto?',
        title: '¡Hablemos!',
        description:
            'Estoy disponible para oportunidades laborales, proyectos freelance o simplemente para conectar. ¡No dudes en contactarme!',
    };

    const contactItems = [
        {
            iconClassName: 'fas fa-envelope',
            label: 'Email',
            value: 'saul9084@gmail.com',
            href: 'mailto:saul9084@gmail.com',
        },
        {
            iconClassName: 'fas fa-map-marker-alt',
            label: 'Ubicación',
            value: 'Estado de México, México',
        },
        {
            iconClassName: 'fas fa-briefcase',
            label: 'Disponibilidad',
            value: 'Disponible para trabajar',
            isAvailable: true,
        },
    ];

    const ctaContent = {
        title: '¿Listo para comenzar?',
        description: 'Envíame un mensaje y te responderé lo antes posible.',
        buttonLabel: 'Enviar mensaje',
        buttonHref: 'mailto:saul9084@gmail.com',
    };

    return (
        <section className={`section ${styles.contact ?? 'contact'}`} id="contact">
            <div className="container">
                <div className={styles.contact__content ?? 'contact__content'}>
                    <div className="contact__info">
                        <span className="section__subtitle">{sectionContent.subtitle}</span>
                        <h2 className="section__title">{sectionContent.title}</h2>
                        <p className={styles.contact__description ?? 'contact__description'}>{sectionContent.description}</p>

                        <div className={styles.contact__data ?? 'contact__data'}>
                            {contactItems.map((item) => (
                                <div className={styles.contact__item ?? 'contact__item'} key={item.label}>
                                    <div className={styles.contact__icon ?? 'contact__icon'}>
                                        <i className={item.iconClassName}></i>
                                    </div>
                                    <div className="contact__text">
                                        <span className={styles.contact__label ?? 'contact__label'}>{item.label}</span>
                                        {item.href ? (
                                            <Link href={item.href} className={styles.contact__value ?? 'contact__value'}>
                                                {item.value}
                                            </Link>
                                        ) : (
                                            <span
                                                className={`${styles.contact__value ?? 'contact__value'} ${
                                                    item.isAvailable
                                                        ? (styles['contact__value--available'] ?? 'contact__value--available')
                                                        : ''
                                                }`.trim()}
                                            >
                                                {item.value}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="contact__cta">
                        <div className={styles.contact__card ?? 'contact__card'}>
                            <h3 className={styles['contact__card-title'] ?? 'contact__card-title'}>{ctaContent.title}</h3>
                            <p className={styles['contact__card-text'] ?? 'contact__card-text'}>{ctaContent.description}</p>
                            <Link href={ctaContent.buttonHref} className={`btn ${styles['btn--primary'] ?? 'btn--primary'} ${styles['btn--large'] ?? 'btn--large'} ${styles['btn--full'] ?? 'btn--full'}`}>
                                <i className="fas fa-paper-plane"></i> {ctaContent.buttonLabel}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
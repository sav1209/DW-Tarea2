import React from 'react';
import styles from './CV.module.css';
import Link from 'next/link';


const LinkDescargaCV: string = 'https://sav1209.github.io/Lab05SaulVilledaLopez/'
const LinkCVDigital: string = 'https://sav1209.github.io/DW-Tarea2/'

interface RedSocial {
    usuario: string;
    enlace: string;
}

const LinkedIn: RedSocial = {
    usuario: '@sav1209',
    enlace: 'https://www.linkedin.com/in/sav1209/'
}

const GitHub: RedSocial = {
    usuario: '@sav1209',
    enlace: 'https://github.com/sav1209'
}

const Email: RedSocial = {
    usuario: 'saul9084@gmail.com',
    enlace: ''
}


export default function Interests() {
    return (
        <section className={`${styles.cv} section`} id="cv">
            <div className={`container`}>
                <div className={styles.cv__content}>
                    <div className={styles.cv__info}>
                        <span className={`section__subtitle`}>Conoce mi trayectoria</span>
                        <h2 className={`section__title`}>Mi Currículum</h2>
                        <p className={styles.cv__description}>
                            Descarga mi CV para conocer mi formación académica, habilidades 
                            técnicas y experiencia. También puedes conectar conmigo en mis 
                            redes profesionales.
                        </p>
                        
                        <div className={styles.cv__buttons}>
                            <Link href={LinkDescargaCV} className={`btn btn--primary btn--large`}>
                                <i className={`fas fa-download`}></i> Descargar CV
                            </Link>
                            <Link href={LinkCVDigital} className={`btn btn--secondary btn--large`}>
                                <i className={`fas fa-eye`}></i> Ver CV Digital
                            </Link>
                        </div>
                    </div>
                    
                    <div className={styles.cv__social}>
                        <h3 className={styles['cv__social-title']}>Conectemos</h3>
                        <div className={styles['cv__social-links']}>
                            <Link href={LinkedIn.enlace} target="_blank" rel="noopener noreferrer" className={styles.social__card}>
                                <div className={`${styles.social__icon} ${styles['social__icon--linkedin']}`}>
                                    <i className={`fab fa-linkedin-in`}></i>
                                </div>
                                <div className={styles.social__info}>
                                    <span className={styles.social__name}>LinkedIn</span>
                                    <span className={styles.social__user}>{LinkedIn.usuario}</span>
                                </div>
                                <i className={`fas fa-arrow-right ${styles.social__arrow}`}></i>
                            </Link>
                            
                            <Link href={GitHub.enlace} target="_blank" rel="noopener noreferrer" className={styles.social__card}>
                                <div className={`${styles.social__icon} ${styles['social__icon--github']}`}>
                                    <i className={`fab fa-github`}></i>
                                </div>
                                <div className={styles.social__info}>
                                    <span className={styles.social__name}>GitHub</span>
                                    <span className={styles.social__user}>{GitHub.usuario}</span>
                                </div>
                                <i className={`fas fa-arrow-right ${styles.social__arrow}`}></i>
                            </Link>
                            
                            <Link href={Email.enlace} className={styles.social__card}>
                                <div className={`${styles.social__icon} ${styles['social__icon--email']}`}>
                                    <i className={`fas fa-envelope`}></i>
                                </div>
                                <div className={styles.social__info}>
                                    <span className={styles.social__name}>Email</span>
                                    <span className={styles.social__user}>{Email.usuario}</span>
                                </div>
                                <i className={`fas fa-arrow-right ${styles.social__arrow}`}></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
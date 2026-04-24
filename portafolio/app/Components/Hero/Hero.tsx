import React from 'react';
import styles from './Hero.module.css';
import Link from 'next/link';

let Nombre:String = 'Saúl Villeda López'
let Puesto:String = 'Ingeniero de Software'
let Descripcion:String = 'Estudiante de Matemáticas Aplicadas y Computación y apasionado por crear soluciones tecnológicas innovadoras.'
export default function Hero() {
    return (
        <section className={`section ${styles.hero}`} id="home">
            <div className={`${styles.hero__container} container`}>
                <div className={styles.hero__content}>
                    <span className={styles.hero__greeting}>¡Hola! 👋 Soy</span>
                    <h1 className={styles.hero__title}>{Nombre}</h1>
                    <h2 className={styles.hero__subtitle}>
                        <span className={styles.highlight}>{Puesto}</span> en Crecimiento
                    </h2>
                    <p className={styles.hero__description}>
                        {Descripcion}
                    </p>
                    
                    <div className={styles.hero__buttons}>
                        <Link href="#projects" className={`btn btn--primary`}>
                            <i className="fas fa-rocket"></i> Ver mis proyectos
                        </Link>
                        
                        <Link href="#contact" className={`btn btn--outline`}>
                            <i className="fas fa-envelope"></i> Contáctame
                        </Link>
                    </div>
                </div>
                
                <div className={styles.hero__image}>
                    <div className={styles.hero__blob}>
                        <div className={styles.hero__avatar}>
                            <i className="fas fa-user-astronaut"></i>
                        </div>
                    </div>
                    <div className={`${styles.hero__decoration} ${styles['hero__decoration--1']}`}></div>
                    <div className={`${styles.hero__decoration} ${styles['hero__decoration--2']}`}></div>
                    <div className={`${styles.hero__decoration} ${styles['hero__decoration--3']}`}></div>
                </div>
            </div>
            
            <div className={styles.hero__scroll}>
                <Link href="#interests" className={styles['hero__scroll-link']}>
                    <span>Scroll</span>
                    <i className="fas fa-chevron-down"></i>
                </Link>
            </div>
        </section>
    )
}
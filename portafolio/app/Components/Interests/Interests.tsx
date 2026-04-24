import React from 'react';
import styles from './Interests.module.css';
import Link from 'next/link';


interface Interes {
  icono: string;
  nombre: string;
  descripcion: string;
  etiquetas: string[];
}

const Intereses: Interes[] = [
    {
        icono: 'fas fa-code',
        nombre: 'Desarrollo Web',
        descripcion: 'Creación de aplicaciones web modernas con tecnologías como HTML5, CSS3, JavaScript y frameworks actuales.',
        etiquetas: [ 'HTML/CSS', 'JavaScript', 'React' ]
    },
    {
        icono: 'fas fa-brain',
        nombre: 'Inteligencia Artificial',
        descripcion: 'Machine Learning, procesamiento de datos y desarrollo de soluciones inteligentes con Python.',
        etiquetas: ['Python', 'ML', 'Data Science']
    },
    {
        icono: 'fas fa-database',
        nombre: 'Bases de Datos',
        descripcion: 'Diseño, administración y optimización de bases de datos relacionales y NoSQL.',
        etiquetas: ['MySQL', 'PostgreSQL', 'MongoDB']
    },
    {
        icono: 'fas fa-circle-nodes',
        nombre: 'Estructuras de datos y algoritmos',
        descripcion: 'Apasionado por el diseño de soluciones eficientes, análisis de complejidad y optimización de código.',
        etiquetas: ['Matemáticas', 'C++']
    },
    {
        icono: 'fas fa-cloud',
        nombre: 'Cloud Computing',
        descripcion: 'Servicios en la nube, arquitecturas escalables y despliegue de aplicaciones.',
        etiquetas: ['AWS', 'Azure', 'Docker']
    }
];

const Materias: string[] = [
    'Programación Orientada a Objetos',
    'Estructuras de Datos',
    'Algoritmos',
    'Bases de Datos',
    'Desarrollo Web'
]


export default function Interests() {
    return (
        <section className={`${styles.interests} section`} id="interests">
            <div className={`container`}>
                <div className={`section__header`}>
                    <span className={`section__subtitle`}>Lo que me apasiona</span>
                    <h2 className={`section__title`}>Intereses & Especialidades</h2>
                    <p className={`section__description`}>
                        Áreas tecnológicas que me entusiasman y en las que busco especializarme
                    </p>
                </div>
                
                <div className={styles.interests__grid}>
                    {Intereses.map(interes =>(
                        <article className={styles.interest__card}>
                            <div className={styles.card__icon}>
                                <i className={interes.icono}></i>
                            </div>
                            <h3 className={styles.card__title}>{interes.nombre}</h3>
                            <p className={styles.card__description}>
                                {interes.descripcion}
                            </p>
                            <div className={styles.card__tags}>
                                {interes.etiquetas.map(etiqueta => (
                                    <span className={styles.tag}>{etiqueta}</span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
                
                <div className={styles.subjects}>
                    <h3 className={styles.subjects__title}>
                        <i className="fas fa-graduation-cap"></i> Materias Relevantes
                    </h3>
                    <div className={styles.subjects__list}>
                        {Materias.map(materia => (
                            <span className={styles.subject}>{materia}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
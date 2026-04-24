import React from 'react';
import styles from './Projects.module.css';
import Link from 'next/link';

export default function Projects() {
    const sectionContent = {
        subtitle: 'Mi trabajo',
        title: 'Proyectos Destacados',
        description: 'Una seleccion de proyectos que demuestran mis habilidades y pasion por el desarrollo',
    };

    const projects = [
        {
            title: 'Competitive Programming Reference',
            description:
                'Notas que utilizo en competencias estilo ICPC como referencia para los algoritmos y estructuras de datos que conozco.',
            iconClassName: 'fas fa-book-open',
            liveUrl: 'https://github.com/sav1209/My-CP-Reference/blob/main/main.pdf',
            repoUrl: 'https://github.com/sav1209/My-CP-Reference',
            techs: ['Typst', 'C++', 'Python'],
        },
        {
            title: 'Recursos de Programacion Competitiva',
            description:
                'Sitio web dedicado a recopilar recursos de Programacion Competitiva que comparto con mis companeros para aprender juntos.',
            iconClassName: 'fa-solid fa-box-archive',
            liveUrl: 'https://sav1209.github.io/Recursos-CP/',
            repoUrl: 'https://github.com/sav1209/Recursos-CP',
            techs: ['HTML', 'CSS'],
        },
        {
            title: 'Plantillas para elaboracion de documentos',
            description:
                'Coleccion de plantillas personales con un estilo moderno utiles para la elaboracion de mis Tareas/Reportes en la universidad.',
            iconClassName: 'fas fa-school',
            liveUrl: 'https://github.com/sav1209/Mis-Plantillas-Typst/tree/main',
            repoUrl: 'https://github.com/sav1209/Mis-Plantillas-Typst/tree/main',
            techs: ['Typst'],
        },
    ];

    const githubProfileUrl = 'https://github.com/sav1209';

    return (
        <section className={`section ${styles.projects ?? 'projects'}`} id="projects">
            <div className="container">
                <div className="section__header">
                    <span className="section__subtitle">{sectionContent.subtitle}</span>
                    <h2 className="section__title">{sectionContent.title}</h2>
                    <p className="section__description">{sectionContent.description}</p>
                </div>

                <div className={styles.projects__grid ?? 'projects__grid'}>
                    {projects.map((project) => (
                        <article className={styles.project__card ?? 'project__card'} key={project.title}>
                            <div className={styles.project__image ?? 'project__image'}>
                                <div className={styles.project__placeholder ?? 'project__placeholder'}>
                                    <i className={project.iconClassName}></i>
                                </div>
                                <div className={styles.project__overlay ?? 'project__overlay'}>
                                    <Link
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.project__link ?? 'project__link'}
                                    >
                                        <i className="fas fa-external-link-alt"></i>
                                    </Link>
                                    <Link
                                        href={project.repoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.project__link ?? 'project__link'}
                                    >
                                        <i className="fab fa-github"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.project__content ?? 'project__content'}>
                                <h3 className={styles.project__title ?? 'project__title'}>{project.title}</h3>
                                <p className={styles.project__description ?? 'project__description'}>{project.description}</p>
                                <div className={styles.project__tech ?? 'project__tech'}>
                                    {project.techs.map((tech) => (
                                        <span className={styles.tech ?? 'tech'} key={`${project.title}-${tech}`}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className={styles.projects__more ?? 'projects__more'}>
                    <Link href={githubProfileUrl} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
                        <i className="fab fa-github"></i> Ver mas en GitHub
                    </Link>
                </div>
            </div>
        </section>
    );
}
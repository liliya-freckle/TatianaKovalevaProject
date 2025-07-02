import React from 'react';
import styles from './about.module.scss';
import AboutItem from './AboutItem';

export default function About () {
    return (
        <div>
            <h2 className={styles.title}>Обо мне</h2>
            <div className={styles.statistics}>
                
            <AboutItem number="3+" description="года я работаю с GetCourse" /> 
            <AboutItem number="20+" description="онлайн-проектов" subText="Посмотреть проекты" />
            <AboutItem number="100+" description="собранных лендингов" />
            <AboutItem number="500+" description="созданных процессов автоматизации" /> 
    </div>
            
        </div>
    );
};

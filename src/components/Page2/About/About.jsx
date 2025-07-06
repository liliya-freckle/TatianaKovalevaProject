import React from 'react';
import { useState } from "react";
import styles from './about.module.scss';
import AboutItem from './AboutItem';
import ModalContent from './ModalContent';
import Modal from './Modal';

export default function About () {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className={styles.aboutSection}>
            <h2 className={styles.title}>Обо мне</h2>
            <div className={styles.statistics}> 
                <AboutItem number="3+" description="года я работаю с GetCourse" /> 
                <AboutItem number="20+" description="онлайн-проектов" subText="Посмотреть проекты" setIsOpen={setIsOpen}/>
                <AboutItem number="100+" description="собранных лендингов" />
                <AboutItem number="500+" description="созданных процессов автоматизации" /> 
            </div>
            <div>
                {isOpen && (
                    <Modal setIsOpen={setIsOpen}>
                        <ModalContent setIsOpen ={setIsOpen} />
                    </Modal>
                )}
            </div>
        </section>
    );
};
